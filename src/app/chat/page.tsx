"use client";

import { useRouter } from "next/navigation";
import { useEffect } from "react";

// Simple redirect page for /chat path
export default function ChatIndexPage() {
  const router = useRouter();

  useEffect(() => {
    // Redirect to matches page if no specific chat is selected
    router.push("/matches");
  }, [router]);

  return null;
}
