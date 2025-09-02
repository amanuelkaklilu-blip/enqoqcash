import { QuizDetails } from "@/components/quiz/quiz-details";

export default function QuizPage({ params }: { params: { id: string } }) {
  const { id } = params; // directly access, no need for use()
  return <QuizDetails id={id} />;
}
