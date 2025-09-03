"use client";

import { ReviewModal } from "@/components/quiz/review-modal";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  ArrowLeft,
  Award,
  Bookmark,
  Clock,
  Share2,
  Star,
  Users,
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState } from "react";

// Sample quiz data - replace later with real API data
const quizData = {
  id: "1",
  title: "Space Exploration Quiz",
  image: "/quiz/q17.png",
  category: "Science & Technology",
  difficulty: "Medium",
  timeLimit: 20,
  reward: "$5.00",
  players: 285,
  maxPlayers: 300,
  spotsLeft: 15,
  questions: 25,
  rating: 4.8,
  ratingCount: 156,
  description:
    "Test your knowledge of the Space Exploration with this comprehensive trivia quiz.",
  requirements: "Basic knowledge of space and technology.",
  creator: {
    name: "QuizMaster",
    avatar: "/avatars/alex.png",
    level: "Expert Quiz Creator",
    quizzes: 42,
    lastUpdate: "2023-10-15",
  },
  tags: ["Space", "Science", "Astronomy", "Technology"],
  leaderboard: [
    { rank: 1, name: "ThorFan", avatar: "/avatars/wizard.webp", score: 98, time: "12:45" },
    { rank: 2, name: "IronManRules", avatar: "/avatars/sarah.webp", score: 95, time: "13:20" },
  ],
  reviews: [
    { name: "Player1", avatar: "/avatars/genious.png", rating: 5, comment: "Amazing quiz!" },
    { name: "Player2", avatar: "/avatars/brain.png", rating: 4, comment: "Fun but tricky." },
  ],
  relatedQuizzes: [
    { id: 2, title: "DC Universe Trivia", image: "/world-landmarks.png", difficulty: "Hard" },
    { id: 3, title: "Star Wars Saga Trivia", image: "/brain-teasers-puzzles.png", difficulty: "Medium" },
  ],
};

export function QuizDetails({ id }: { id: string }) {
  const [activeTab, setActiveTab] = useState("overview");
  const [isReviewModalOpen, setIsReviewModalOpen] = useState(false);
  const [userReviews, setUserReviews] = useState(quizData.reviews);

  const router = useRouter();

  // ✅ Correct play button handler
  const playNow = () => {
    router.push(`/quiz/${id}`);
  };

  const getDifficultyVariant = (difficulty: string) => {
    switch (difficulty) {
      case "Easy":
        return "success";
      case "Medium":
        return "yellow";
      case "Hard":
        return "destructive";
      default:
        return "default";
    }
  };

  const progressPercentage = (quizData.players / quizData.maxPlayers) * 100;

  const handleReviewSubmit = (review: { rating: number; comment: string }) => {
    const newReview = {
      name: "You",
      avatar: "/avatars/master.png",
      rating: review.rating,
      comment: review.comment,
    };
    setUserReviews([newReview, ...userReviews]);
  };

  return (
    <div className="container mx-auto">
      <div className="mb-6">
        <Button variant="ghost" size="sm" asChild className="mb-4">
          <Link href="/explore" className="flex items-center gap-1">
            <ArrowLeft className="h-4 w-4" />
            Back to Explore
          </Link>
        </Button>

        {/* Hero image */}
        <div className="relative h-64 md:h-80 rounded-xl overflow-hidden mb-6">
          <Image
            src={quizData.image || "/placeholder.svg"}
            alt={quizData.title}
            fill
            className="object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent flex flex-col justify-end p-4 md:p-6">
            <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold text-white mb-2">
              {quizData.title}
            </h1>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Tabs */}
          <div className="lg:col-span-2">
            <Tabs defaultValue="overview" onValueChange={setActiveTab}>
              <TabsList className="grid w-full grid-cols-3">
                <TabsTrigger value="overview">Overview</TabsTrigger>
                <TabsTrigger value="leaderboard">Leaderboard</TabsTrigger>
                <TabsTrigger value="reviews">Reviews</TabsTrigger>
              </TabsList>

              <TabsContent value="overview" className="space-y-6 mt-6">
                <p>{quizData.description}</p>
              </TabsContent>

              <TabsContent value="leaderboard" className="mt-6">
                {quizData.leaderboard.map((p) => (
                  <div key={p.rank}>{p.name} - {p.score}%</div>
                ))}
              </TabsContent>

              <TabsContent value="reviews" className="space-y-4 mt-6">
                {userReviews.map((r, i) => (
                  <div key={i}>{r.name}: {r.comment}</div>
                ))}
              </TabsContent>
            </Tabs>
          </div>

          {/* Sidebar */}
          <div>
            <Card>
              <CardContent className="p-6 space-y-6">
                <div className="flex justify-between items-center">
                  <span>Spots filled</span>
                  <span>{quizData.players}/{quizData.maxPlayers}</span>
                </div>
                <Progress value={progressPercentage} className="h-2" />

                {/* ✅ Play Button */}
                <Button onClick={playNow} className="w-full" size="lg">
                  Play Now
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>

      <ReviewModal
        isOpen={isReviewModalOpen}
        onClose={() => setIsReviewModalOpen(false)}
        onSubmit={handleReviewSubmit}
        quizTitle={quizData.title}
      />
    </div>
  );
}
