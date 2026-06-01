import { getAllNewsletterIssues } from "@/data/newsletters";
import { NEWSLETTER_SEND_BATCH_LIMIT } from "@/lib/newsletter-send";
import { getSupabaseAdmin } from "@/lib/supabase-admin";

export type NewsletterAdminIssue = {
  slug: string;
  title: string;
  subject: string;
  status: "draft" | "published";
  publishedAt: string;
  alreadySent: boolean;
  sentAt: string | null;
  recipientCount: number | null;
};

export type NewsletterAdminOverview = {
  activeSubscriberCount: number;
  sendBatchLimit: number;
  issues: NewsletterAdminIssue[];
};

type CampaignRow = {
  newsletter_slug: string;
  recipient_count: number;
  sent_at: string;
};

export async function getActiveSubscriberCount(): Promise<number> {
  const supabase = getSupabaseAdmin();

  const { count, error } = await supabase
    .from("newsletter_subscribers")
    .select("*", { count: "exact", head: true })
    .eq("status", "active")
    .is("unsubscribed_at", null);

  if (error) {
    throw new Error(error.message);
  }

  return count ?? 0;
}

async function getCampaignsBySlug(): Promise<Map<string, CampaignRow>> {
  const supabase = getSupabaseAdmin();

  const { data, error } = await supabase
    .from("newsletter_campaigns")
    .select("newsletter_slug, recipient_count, sent_at");

  if (error) {
    throw new Error(error.message);
  }

  const campaigns = new Map<string, CampaignRow>();

  for (const row of data ?? []) {
    campaigns.set(row.newsletter_slug, row);
  }

  return campaigns;
}

export async function buildNewsletterAdminOverview(): Promise<NewsletterAdminOverview> {
  const [activeSubscriberCount, campaigns] = await Promise.all([
    getActiveSubscriberCount(),
    getCampaignsBySlug(),
  ]);

  const issues: NewsletterAdminIssue[] = getAllNewsletterIssues().map(
    (issue) => {
      const campaign = campaigns.get(issue.slug);
      const alreadySent = campaign !== undefined;

      return {
        slug: issue.slug,
        title: issue.title,
        subject: issue.subject,
        status: issue.status,
        publishedAt: issue.publishedAt,
        alreadySent,
        sentAt: campaign?.sent_at ?? null,
        recipientCount: campaign?.recipient_count ?? null,
      };
    },
  );

  return {
    activeSubscriberCount,
    sendBatchLimit: NEWSLETTER_SEND_BATCH_LIMIT,
    issues,
  };
}
