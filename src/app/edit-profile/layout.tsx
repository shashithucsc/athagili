import React from "react";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Edit Profile | Athagili",
  description: "Edit your Athagili dating profile",
};

export default function EditProfileLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
