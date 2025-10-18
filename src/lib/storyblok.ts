import { apiPlugin, storyblokInit } from "@storyblok/react/rsc";
import { Tour } from "../app/components/Tour";
import Page from "@/app/components/Page";
import Hero from "@/app/components/Hero";
import Grid from "@/app/components/Grid";
import Feature from "@/app/components/Feature";
import Testimonial from "@/app/components/Testimonial";
import RecommendedTours from "@/app/components/RecommendedTours";

export const getStoryblokApi = storyblokInit({
  accessToken: process.env.NEXT_PUBLIC_STORYBLOK_TOKEN,
  use: [apiPlugin],
  components: {
    tour: Tour,
    page: Page,
    hero: Hero,
    grid: Grid,
    feature: Feature,
    testimonial: Testimonial,
    recommended_tours: RecommendedTours
  },
  enableFallbackComponent: true
});
