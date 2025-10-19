import { getStoryblokApi } from "@/lib/storyblok";
import { StoryblokStory } from "@storyblok/react/rsc";
import { draftMode } from "next/headers";

const fetchHomePage = async () => {
  const { isEnabled } = await draftMode();

  const client = getStoryblokApi();
  const response = await client.getStory(`home`, {
    version:
      process.env.NODE_ENV === "development" || isEnabled
        ? "published"
        : "draft",
    resolve_relations: "recommended_tours.tours"
  });

  return response.data.story;
};

export default async function Home() {
  const story = await fetchHomePage();

  return <StoryblokStory story={story} />;
}
