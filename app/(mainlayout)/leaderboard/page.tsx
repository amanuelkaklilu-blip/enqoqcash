import { LeaderboardPage } from "@/components/leaderboard/leaderboard-page";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Leaderboard | እንቆቅCash",
  description: "See who's leading the pack in our global quiz rankings.",
};

export default function LeaderboardRoute() {
  return <LeaderboardPage />;
}
