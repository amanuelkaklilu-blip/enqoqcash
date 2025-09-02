// app/(mainlayout)/quiz/[id]/page.tsx

import { QuizDetails } from "@/components/quiz/quiz-details";

// Server Component by default; params is a plain object.
export default function QuizPage({
  params,
}: {
  params: { id: string };
}) {
  const { id } = params;
  return <QuizDetails id={id} />;
}
