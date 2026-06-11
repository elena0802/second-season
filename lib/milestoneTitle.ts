import type { CareerMilestone } from "@/types/educator";

/**
 * Chapter 05 includes Latin digits ("37") that resolve to Cormorant under
 * font-serif while Korean glyphs use Noto Serif KR. Swap to font-serif-kr so
 * the full title renders in one face.
 */
export function milestoneTitleClassName(
  baseClassName: string,
  milestone: CareerMilestone,
): string {
  if (milestone.id === "no-leave-37-years") {
    return baseClassName.replace(/\bfont-serif\b/, "font-serif-kr");
  }

  return baseClassName;
}
