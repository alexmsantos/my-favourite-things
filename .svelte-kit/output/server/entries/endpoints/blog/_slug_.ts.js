import { d as data } from "../../../chunks/posts-7cc47e41.js";
async function get({ params }) {
  const slug = params.slug.toLowerCase();
  const post = data.find((post2) => post2.slug == slug);
  if (post) {
    return {
      body: { post }
    };
  }
  return {
    body: { message: "Not found", post: null }
  };
}
export { get };
