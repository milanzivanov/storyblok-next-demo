import { StoryblokRichTextNode } from "@storyblok/react";
import Image from "next/image";
import Link from "next/link";


export interface StoryTest {
  
  full_slug: string;

  name: string;
  created_at: string;
  published_at: string | null;
  updated_at?: string | undefined;
  id: number;
  uuid: string;

  content: {
    _uid: string;
    name: string;
    price: string;
    location: string;
    body: StoryblokRichTextNode<string>;
    component: string;
    main_image: MainImage;
    _editable: string;
  };

}
export interface RecommendedTourProps {
  story: StoryTest;
}

interface MainImage {
  id: number;
  alt: string;
  name: string;
  focus: string;
  title: string;
  source: string;
  filename: string;
  copyright: string;
  fieldtype: string;
  meta_data: object;
  is_external_url: boolean;
}

function RecommendedTour({ story }: RecommendedTourProps) {
  // console.log("/////////// RecommendedTour props:", story);
  
  return (
    <div className="max-w-5xl mx-auto bg-white rounded-sm shadow">
      {/* <Image
        className="aspect-video object-cover w-full"
        src={`${story.content.main_image.filename}/m/992x657/filters:quality(70)`}
        width={992}
        height={657}
        alt={story.content.main_image.alt || "Tour Image"}
        loading={"lazy"}
      /> */}

      {/* without filters */}
      <Image
        className="aspect-video object-cover w-full"
        src={story.content.main_image.filename}
        width={992}
        height={657}
        alt={story.content.main_image.alt || "Tour Image"}
        loading="lazy"
        quality={70}
      />
      
      <div className="p-8">
        <div className="flex gap-4 justify-between text-lg font-bold">
          <h3>{story.content.name}</h3>

          <p>
            {Number(story.content.price).toLocaleString("en-US", {
              style: "currency",
              currency: "USD",
              minimumFractionDigits: 0
            })}
          </p>
        </div>
        <p className="text-gray-700 uppercase font-bold mt-2 text-sm tracking-wide">
          {story.content.location}, Serbia
        </p>
        <Link
          className="font-bold text-base mt-8 block underline"
          href={`/${story.full_slug}`}
        >
          View Tour
        </Link>
      </div>
    </div>
  );
}
export default RecommendedTour;
