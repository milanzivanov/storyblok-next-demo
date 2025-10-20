import { StoryblokComponent } from "@storyblok/react";

interface GridParams {
  ref?: string;
  blok: {
    _uid: string;
    items: Array<GridParamsItems>; // Replace 'object' with a more specific type if known
    headline: string;
    component: string;
    _editable: string;
  };
}

interface GridParamsItems {
  _uid: string;
  name: string;
  // Add other properties as needed
}

function Grid(params: GridParams) {
  // console.log("Grid component params:", params.blok.items);

  return (
    <section className="bg-blue-100 py-16">
      <div className="max-w-5xl mx-auto w-full px-4">
        <h2 className="text-3xl text-center md:text-4xl font-bold">
          {params.blok.headline}
        </h2>
        <div className="grid md:grid-flow-col auto-cols-fr mt-12 gap-8">
          {params.blok.items.map((blok) => (
            <StoryblokComponent blok={blok} key={blok._uid} />
          ))}
        </div>
      </div>
    </section>
  );
}
export default Grid;
