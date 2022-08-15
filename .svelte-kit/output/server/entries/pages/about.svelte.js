import { c as create_ssr_component, v as validate_component } from "../../chunks/index-5cd6ad40.js";
import { M as MetaTags } from "../../chunks/MetaTags-9af729a7.js";
import { e as envVariables } from "../../chunks/envVariables-1169fc78.js";
import { b as blogMetaData } from "../../chunks/blogMetaData-3df625f1.js";
const About = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  const meta = {
    title: `About | ${blogMetaData.blogTitle}`,
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
<div class="${"about-container"}"><h1>About</h1>
  <p>Tell People about you!!</p></div>`;
});
export { About as default };
