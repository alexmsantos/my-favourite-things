import { c as create_ssr_component, e as escape, v as validate_component } from "../../../chunks/index-5cd6ad40.js";
import { M as MetaTags } from "../../../chunks/MetaTags-9af729a7.js";
import { format } from "fecha";
import { b as blogMetaData } from "../../../chunks/blogMetaData-3df625f1.js";
import { e as envVariables } from "../../../chunks/envVariables-1169fc78.js";
var PostDetail_svelte_svelte_type_style_lang = "";
const css = {
  code: ".post-detail.svelte-j00oao{padding:1rem;margin-top:1rem}.post-detail__top.svelte-j00oao{border-bottom:solid 1px var(--border-color);margin-bottom:2rem}.post-detail__top__title.svelte-j00oao{padding-bottom:2rem;margin:0}.post-detail__top__info.svelte-j00oao{padding-bottom:2rem;display:flex;flex-direction:row}.post-detail__top__info__date.svelte-j00oao{color:var(--secondary-color)}.post-detail__top__info__author.svelte-j00oao{margin-left:0.4rem}",
  map: null
};
const PostDetail = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { post } = $$props;
  if ($$props.post === void 0 && $$bindings.post && post !== void 0)
    $$bindings.post(post);
  $$result.css.add(css);
  return `<div class="${"post-detail svelte-j00oao"}"><div class="${"post-detail__top svelte-j00oao"}"><h1 class="${"post-detail__top__title svelte-j00oao"}">${escape(post.title)}</h1>

    <div class="${"post-detail__top__info svelte-j00oao"}"><span class="${"post-detail__top__info__date svelte-j00oao"}">${escape(format(new Date(post.date), "MMMM DD, YYYY"))},
      </span>

      <a class="${"post-detail__top__info__author svelte-j00oao"}" href="${"/about"}">by Yourname</a></div></div>
  <div class="${"post-detail__content"}"><!-- HTML_TAG_START -->${post.body}<!-- HTML_TAG_END --></div>
</div>`;
});
const U5Bslugu5D = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { post } = $$props;
  const meta = {
    title: `${post.title} | ${blogMetaData.blogTitle}`,
    description: post.description ?? post.title,
    url: `/blog/${post.slug}`,
    siteName: blogMetaData.blogTitle,
    author: blogMetaData.blogTitle,
    image: {
      url: `${envVariables.basePath}/background.jpeg`,
      width: 1e3,
      height: 523,
      alt: "image"
    }
  };
  if ($$props.post === void 0 && $$bindings.post && post !== void 0)
    $$bindings.post(post);
  return `${validate_component(MetaTags, "MetaTags").$$render($$result, {
    title: meta.title,
    description: meta.description,
    canonical: meta.url,
    openGraph: {
      article: { authors: [meta.author] },
      images: [{ ...meta.image }],
      description: meta.description,
      site_name: meta.siteName,
      title: meta.title,
      type: "article",
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

${validate_component(PostDetail, "PostDetail").$$render($$result, { post }, {}, {})}`;
});
export { U5Bslugu5D as default };
