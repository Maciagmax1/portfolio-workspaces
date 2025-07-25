import type { PortableTextBlock } from "@portabletext/types";
import type { ImageAsset, Slug } from "@sanity/types";
import groq from "groq";
import { sanityClient } from "sanity:client";

export const keyDocuments = {
  MAIN_NAV: "Main Navigation",
};

export async function getProjects(): Promise<Project[]> {
  return await sanityClient.fetch(
    groq`*[_type == "project" && defined(slug.current)] | order(_createdAt desc)`,
  );
}

export async function getProject(slug: string): Promise<Project> {
  return await sanityClient.fetch(
    groq`*[_type == "project" && slug.current == $slug][0]`,
    {
      slug,
    },
  );
}

export async function getNav(name: string): Promise<NavContent | null> {
  return await sanityClient.fetch(
    groq`*[_type == "navigation" && title == $name][0]`,
    {
      name,
    },
  );
}

export async function getLandingPage(
  name: string,
): Promise<LandingPage | null> {
  return await sanityClient.fetch(
    groq`*[_type == "landingPage" && title == $name][0]{
      ...,
      mainImage{
        ...,
        asset->
      }
    }`,
    {
      name,
    },
  );
}

export interface Project {
  _type: "project";
  _createdAt: string;
  title?: string;
  slug: Slug;
  excerpt?: string;
  mainImage?: ImageAsset & { alt?: string };
  body: PortableTextBlock[];
  demoUrl: URL;
  authors: Author[];
}

export interface NavContent {
  _type: "navigation";
  title: string;
  navigationItems: {
    label: string;
    url: string;
    children?: {
      label: string;
      description: string;
      icon?: ImageAsset;
      url: string;
    }[];
  }[];
}

export interface LandingPage {
  _type: "landingPage";
  title: string;
  content: PortableTextBlock[];
  mainImage: { asset: ImageAsset & { alt?: string } };
  carousel: {
    label: string;
    description: string;
    image: ImageAsset;
    url: string;
  }[];
}

type Author = {
  name: string;
  socials: Record<string, URL>[];
};
