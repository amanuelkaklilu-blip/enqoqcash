import { categoriesData } from "@/components/categories/categories-data";
import { CategoryDetailPage } from "@/components/categories/category-detail-page";

export function generateMetadata({ params }: { params: { slug: string } }) {
  const { slug } = params;
  const category = categoriesData.find((cat) => cat.slug === slug);

  if (!category) {
    return {
      title: "Category Not Found | እንቆቅCash",
      description: "The requested category could not be found.",
    };
  }

  return {
    title: `${category.name} Quizzes | እንቆቅCash`,
    description: `Browse and play ${category.name.toLowerCase()} quizzes on እንቆቅCash.`,
  };
}

export default function CategoryRoute({ params }: { params: { slug: string } }) {
  const { slug } = params;
  const category = categoriesData.find((cat) => cat.slug === slug);

  return <CategoryDetailPage categoryName={category} />;
}
