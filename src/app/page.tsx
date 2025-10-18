import { getStoryblokApi } from "@/lib/storyblok";
import { StoryblokStory } from "@storyblok/react/rsc";

const fetchHomePage = async () => {
  const client = getStoryblokApi();
  const response = await client.getStory(`home`, {
    version: "draft",
    resolve_relations: "recommended_tours.tours"
  });

  return response.data.story;
};

export default async function Home() {
  const story = await fetchHomePage();

  return <StoryblokStory story={story} />;
}
