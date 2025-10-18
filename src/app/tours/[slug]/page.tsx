import { StoryblokStory } from "@storyblok/react/rsc";

import { getStoryblokApi } from "@/lib/storyblok";

const fetchTourPage = async (slug: string) => {
  const client = getStoryblokApi();
  const response = await client.getStory(`tours/${slug}`, {
    version: "draft"
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
