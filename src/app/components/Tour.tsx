import { renderRichText, StoryblokRichTextNode } from "@storyblok/react/rsc";
import Image from "next/image";

interface TourBlok {
  _uid: string;
  body: StoryblokRichTextNode<string>;
  name: string;
  price: string;
  location: string;
  component: string;
  main_image: {
    id: number;
    alt: string;
    name: string;
    focus: string;
    title: string;
    source: string;
    filename: string;
    copyright: string;
    fieldtype: string;
    is_external_url: boolean;
  };
  introduction: string;
  _editable: string;
}

interface TourParams {
  ref?: string;
  blok: TourBlok;
}

export function Tour(props: TourParams) {
  // console.log(`Tour component props:`, props.blok.body);
  return (
    <main className="max-w-5xl mx-auto px-4 w-full pt-12 pb-16">
      <h1 className="text-3xl md:text-5xl font-bold">{props.blok.name}</h1>
      <Image
        className="mt-12 rounded-md object-cover w-full"
        src={props.blok.main_image.filename}
        alt={props.blok.main_image.alt}
        width={+props.blok.main_image.filename.split("/")[5].split("x")[0]}
        height={+props.blok.main_image.filename.split("/")[5].split("x")[1]}
        sizes="(max-width: 1538px) 100vw, 1504px"
        priority={true}
      />
      <p className="mt-12 text-lg md:text-2xl md:leading-relaxed">
        {props.blok.introduction}
      </p>

      <div
        className="prose md:prose-lg mt-16 max-w-none"
        dangerouslySetInnerHTML={{
          __html:
            renderRichText(props.blok.body, {
              resolvers: {
                image: (node) => {
                  const attrs = node.attrs || {};
                  return `
                        <Image
                          src="${attrs.src}/m/1504x0/filters:quality(75)"
                          alt="${attrs.alt || ""}"
                          loading="lazy"
                          width="${attrs.src.split("/")[5].split("x")[0]}"
                          height="${attrs.src.split("/")[5].split("x")[1]}"
                        />
                      `;
                }
              }
            }) ?? ""
        }}
      ></div>
    </main>
  );
}
