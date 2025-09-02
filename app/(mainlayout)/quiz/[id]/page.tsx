import { QuizDetails } from "@/components/quiz/quiz-details";

// ⬅️ NOTE: No "use" import from React.

type PageProps = {
  params: { id: string };
};

export default function QuizPage({ params }: PageProps) {
  // read params directly (no use())
  return <QuizDetails id={params.id} />;
}
