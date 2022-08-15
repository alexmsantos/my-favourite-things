import { c as create_ssr_component, e as escape, a as add_attribute, v as validate_component, b as each } from "../../chunks/index-5cd6ad40.js";
import { e as envVariables } from "../../chunks/envVariables-1169fc78.js";
import { b as blogMetaData } from "../../chunks/blogMetaData-3df625f1.js";
import { M as MetaTags } from "../../chunks/MetaTags-9af729a7.js";
import { format } from "fecha";
const PostList = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `<div class="${"post-list"}">${slots.default ? slots.default({}) : ``}</div>`;
});
var Post_svelte_svelte_type_style_lang = "";
const css = {
  code: ".post-item.svelte-1nignpp{border-bottom:solid 1px var(--border-color);padding:1rem 0;line-height:1.6}.post-item__date.svelte-1nignpp{color:var(--secondary-color)}.post-item__title.svelte-1nignpp{margin:0.5rem 0}.post-item__title__link.svelte-1nignpp{color:var(--main-color);font-size:1.5rem;text-decoration:none}",
  map: null
};
const Post = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { post } = $$props;
  if ($$props.post === void 0 && $$bindings.post && post !== void 0)
    $$bindings.post(post);
  $$result.css.add(css);
  return `<div class="${"post-item svelte-1nignpp"}"><p class="${"post-item__date svelte-1nignpp"}">${escape(format(new Date(post.date), "MMMM DD, YYYY"))}</p>
  <h2 class="${"post-item__title svelte-1nignpp"}"><a class="${"post-item__title__link svelte-1nignpp"}"${add_attribute("href", `/blog/${post.slug}`, 0)}>${escape(post.title)}</a></h2>
  <p class="${"post-item__description"}">${escape(post.description)}</p>
</div>`;
});
const Routes = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { posts } = $$props;
  const meta = {
    title: `Home | ${blogMetaData.blogTitle}`,
    description: blogMetaData.description,
    url: envVariables.basePath,
    siteName: blogMetaData.blogTitle,
    image: {
      url: `${envVariables.basePath}/background.jpeg`,
      width: 1e3,
      height: 523,
      alt: "image"
    }
  };
  if ($$props.posts === void 0 && $$bindings.posts && posts !== void 0)
    $$bindings.posts(posts);
  return `${validate_component(MetaTags, "MetaTags").$$render($$result, {
    title: meta.title,
    description: meta.description,
    canonical: meta.url,
    openGraph: {
      description: meta.description,
      images: [{ ...meta.image }],
      site_name: meta.siteName,
      title: meta.title,
      type: "website",
      url: meta.url
    },
    twitter: {
      cardType: "summary_large_image",
      title: meta.title,
      description: meta.description,
      image: meta.image.url,
      imageAlt: meta.image.alt
    }
  }, {}, {})}

${validate_component(PostList, "PostList").$$render($$result, {}, {}, {
    default: () => {
      return `${each(posts, (post) => {
        return `${validate_component(Post, "PostItem").$$render($$result, { post }, {}, {})}`;
      })}`;
    }
  })}`;
});
export { Routes as default };
