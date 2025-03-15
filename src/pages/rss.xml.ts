import rss from "@astrojs/rss";
import type { APIContext } from "astro";
import { getCollection } from "astro:content";
import { SITE_TITLE } from "../consts";

export async function GET(context: APIContext) {
  const blogs = await getCollection("blog");

  return rss({
    title: SITE_TITLE,
    description:
      "A personal blog about software engineering, web development, and my journey building with modern technologies.",
    site: context.site ?? "blog.himanshubhardwaz.com",
    items: blogs.map((post) => ({
      ...post.data,
      pubDate: post.data.date,
      link: `/blog/${post.id.replace(/\.(mdx|md)$/, "")}/`,
    })),
    customData: `<language>en-us</language>`,
  });
}
