import { categoriesData } from "@/components/categories/categories-data";
import { CategoryDetailPage } from "@/components/categories/category-detail-page";
import { use } from "react";

export function Metadata({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = use(params);
  const category = categoriesData.find((cat) => cat.slug === slug);

  if (!category) {
    return {
      title: "Category Not Found | እንቆቅCash",
      description: "The requested category could not be found.",
    };
  }

  return {
    title: `${category.name} Quizzes | እንቆቅCash`,
    description: `Browse and play ${category.name.toLowerCase()} quizzes. ${category.description}`,
  };
}

export default function CategoryRoute({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = use(params);
  const category = categoriesData.find((cat) => cat.slug === slug);

  return <CategoryDetailPage categoryName={category} />;
}
