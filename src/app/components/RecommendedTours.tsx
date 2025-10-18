/* eslint-disable @typescript-eslint/no-explicit-any */
import RecommendedTour from "./RecommendedTour";

interface RecommendedToursParams {
  ref?: string;
  blok: {
    _uid: string;
    tours: Array<TourStory>;
    headline: string;
    component: string;
    _editable: string;
  };
}

export interface TourStory {
  name: string;
  created_at: string;
  published_at: string;
  updated_at: string;
  id: number;
  uuid: string;
  content: {
    _uid: string;
    body: any; // You can refine this later if you know the structure
    name: string;
    price: string;
    location: string;
    component: string;
    main_image: any; // Replace with proper type if known (e.g., { filename: string; alt?: string })
    introduction: string;
    _editable: string;
  };
  slug: string;
  full_slug: string;
  sort_by_date: string | null;
  position: number;
  tag_list: string[];
  is_startpage: boolean;
  parent_id: number | null;
  meta_data: any | null;
  group_id: string;
  first_published_at: string;
  release_id: number | null;
  lang: string;
  path: string | null;
  alternates: any[];
  default_full_slug: string | null;
  translated_slugs: any | null;
}

function RecommendedTours(params: RecommendedToursParams) {
  // console.log("RecommendedTours component params:", params);

  return (
    <section className="py-16 max-w-5xl mx-auto w-full px-4">
      <h2 className="text-3xl md:text-4xl font-bold text-center">
        {params.blok.headline}
      </h2>
      <div className="grid md:grid-cols-2 gap-8 mt-16">
        {params.blok.tours.map((tour) => (
          // console.log("/////////// Rendering tour:", tour),
          <RecommendedTour story={tour} key={tour.content._uid} />
        ))}
      </div>
    </section>
  );
}
export default RecommendedTours;
