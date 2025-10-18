/* eslint-disable @typescript-eslint/no-explicit-any */
import { getStoryblokApi } from "@/lib/storyblok";
import { StoryblokStory } from "@storyblok/react/rsc";
import RecommendedTour from "../components/RecommendedTour";

const fetchToursPage = async () => {
  const client = getStoryblokApi();
  const response = await client.getStory(`tours`, {
    version: "draft"
  });

  return response.data.story;
};

const fetchAllTours = async () => {
  const client = getStoryblokApi();
  const response = await client.getStories({
    content_type: "tour",
    version: "draft"
  });

  return response.data.stories;
};

async function ToursPage() {
  const story = await fetchToursPage();
  const tours = await fetchAllTours();

  // console.log("////////// Tours page tours:", tours);
  // console.log("////////// Story page story:", story);

  return (
    <div>
      <StoryblokStory story={story} />
      <div className="grid md:grid-cols-2 gap-8 container mx-auto px-4 w-full py-16">
        {tours.map((tour) => (
          <RecommendedTour story={tour as any} key={tour.content._uid} />
        ))}
      </div>
    </div>
  );
}
export default ToursPage;
