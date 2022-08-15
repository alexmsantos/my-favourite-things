import { e as envVariables } from "../../chunks/envVariables-1169fc78.js";
import { g as getPosts } from "../../chunks/getPosts-7268a894.js";
import "../../chunks/posts-7cc47e41.js";
async function get() {
  const response = await getPosts();
  const body = sitemap(response.body.posts);
  const headers = {
    "Cache-Control": "max-age=0, s-maxage=3600",
    "Content-Type": "application/xml"
  };
  return {
    headers,
    body
  };
}
const sitemap = (posts) => {
  const otherPages = [
    { path: "about" },
    { path: "projects" }
  ];
  return `<?xml version="1.0" encoding="UTF-8" ?>
<urlset
  xmlns="https://www.sitemaps.org/schemas/sitemap/0.9"
  xmlns:news="https://www.google.com/schemas/sitemap-news/0.9"
  xmlns:xhtml="https://www.w3.org/1999/xhtml"
  xmlns:mobile="https://www.google.com/schemas/sitemap-mobile/1.0"
  xmlns:image="https://www.google.com/schemas/sitemap-image/1.1"
  xmlns:video="https://www.google.com/schemas/sitemap-video/1.1"
>
  <url>
    <loc>${envVariables.basePath}</loc>
    <changefreq>daily</changefreq>
    <priority>0.7</priority>
  </url>
  ${otherPages.map((page) => `
  <url>
    <loc>${envVariables.basePath}/${page.path}</loc>
    <changefreq>daily</changefreq>
    <priority>0.7</priority>
  </url>
  `).join("")}
  ${posts.map((post) => `
  <url>
    <loc>${envVariables.basePath}/blog/${post.slug}</loc>
    <changefreq>daily</changefreq>
    <priority>0.7</priority>
  </url>
  `).join("")}
</urlset>`;
};
export { get };
