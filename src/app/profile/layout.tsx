import React from "react";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "My Profile | Athagili",
  description: "View and edit your Athagili dating profile",
};

export default function ProfileLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
