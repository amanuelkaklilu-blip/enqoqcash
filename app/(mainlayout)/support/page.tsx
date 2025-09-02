import { SupportPage } from "@/components/support/support-page";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Support - እንቆቅCash",
  description: "Get help and support for your እንቆቅCash  account",
};

export default function Support() {
  return <SupportPage />;
}
