import { StoryblokStory } from "@storyblok/react/rsc";

import { getStoryblokApi } from "@/lib/storyblok";

export const generateStaticParams = async () => {
  const client = getStoryblokApi();
  const response = await client.getStories({
    content_type: "tour",
    version: process.env.NODE_ENV === "development" ? "published" : "draft"
  });

  return response.data.stories.map((story) => ({
    slug: story.slug as string
  }));
};
const fetchTourPage = async (slug: string) => {
  const client = getStoryblokApi();
  const response = await client.getStory(`tours/${slug}`, {
    version: process.env.NODE_ENV === "development" ? "published" : "draft"
  });

  return response.data.story;
};

export default async function TourPage({
  params
}: {
  params: Promise<{ slug: string }>;
}) {
  const story = await fetchTourPage((await params).slug);

  return (
    <div>
      <StoryblokStory story={story} />
    </div>
  );
}
