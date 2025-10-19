import RecommendedTour from "./RecommendedTour";

import { RecommendedTourProps } from "./RecommendedTour";

interface RecommendedToursParams {
  ref?: string;
  blok: {
    _uid: string;
    tours: Array<RecommendedTourProps["story"]>;
    headline: string;
    component: string;
    _editable: string;
  };
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
