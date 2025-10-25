// /* eslint-disable @typescript-eslint/no-explicit-any */

import { getStoryblokApi } from "@/lib/storyblok";
import { StoryblokStory } from "@storyblok/react/rsc";
import RecommendedTour, { StoryTest } from "../components/RecommendedTour";




const fetchToursPage = async () => {
  const client = getStoryblokApi();
  const response = await client.getStory(`tours`, {
    version: process.env.NODE_ENV === "development" ? "published" : "draft"
  });

  return response.data.story;
};

const fetchAllTours = async () => {
  const client = getStoryblokApi();
  const response = await client.getStories({
    content_type: "tour",
    version: process.env.NODE_ENV === "development" ? "published" : "draft"
  });

  // inspect
  return response.data.stories.map(p => p as unknown as StoryTest) ;
};

async function ToursPage() {
  const story = await fetchToursPage();
  const tours = await fetchAllTours();

  // console.log("////////// Tours page tours:", tours);
  // console.log("////////// Story page story:", story);

  return (
    <>
      <StoryblokStory story={story} />
      <div>
        <h2 className="text-3xl md:text-4xl font-bold text-center mt-16">
          Recommended Tours
        </h2>
      <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto px-4 w-full py-16">
        {tours.map((tour) => (
          // ???? NEEDS IMPROVMENTS
          <RecommendedTour story={tour} key={tour.content._uid} />
        ))}               
      </div>
      </div>
    </>
  );
}
export default ToursPage;
