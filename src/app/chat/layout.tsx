import React from "react";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Chat | Athagili",
  description: "Chat with your matches on Athagili",
};

export default function ChatLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
