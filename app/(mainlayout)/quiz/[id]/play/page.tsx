"use client";

import { QuizPlay } from "@/components/quiz/quiz-play";

export default function QuizPlayPage({ params }: { params: { id: string } }) {
  const { id } = params; // ✅ safely extract the string

  return <QuizPlay id={id} />;
}
