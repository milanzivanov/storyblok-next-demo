"use client";

import { getStoryblokApi } from "@/lib/storyblok";

export default function StoryblokProvider({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  getStoryblokApi();
  return children;
}
