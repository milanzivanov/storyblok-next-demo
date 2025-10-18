import { StoryblokComponent } from "@storyblok/react";

interface PageParams {
  ref?: string;
  blok: {
    _uid: string;
    blocks: Array<PageParamsBlocks>;
    component: string;
    _editable: string;
  };
}

interface PageParamsBlocks {
  _uid: string;
  content: string;
  headline: string;
}

function Page(params: PageParams) {
  // console.log("Page component params:", params.blok.blocks);

  return (
    <main>
      {params.blok.blocks.map((block) => (
        <StoryblokComponent blok={block} key={block._uid} />
      ))}
    </main>
  );
}
export default Page;
