import CategoryArchive from "@/components/CategoryArchive";

export const metadata = {
  title: "Places",
  description:
    "좋은 장소는 단순히 예쁜 곳이 아니라, 다시 머물고 싶은 곳입니다.",
};

export default function PlacesPage() {
  return (
    <CategoryArchive
      title="Places"
      subtitle="좋은 장소는 단순히 예쁜 곳이 아니라, 다시 머물고 싶은 곳입니다."
      category="Places"
    />
  );
}
