import { c as create_ssr_component, e as escape, v as validate_component } from "../../chunks/index-5cd6ad40.js";
import { b as blogMetaData } from "../../chunks/blogMetaData-3df625f1.js";
var global = "";
var Header_svelte_svelte_type_style_lang = "";
const css$3 = {
  code: ".header.svelte-ogqfcg{height:6rem;display:flex;justify-content:space-between;flex-direction:row}.header__title.svelte-ogqfcg{margin-left:1rem;color:var(--main-color);text-decoration:none;font-weight:bold;font-size:1.5rem;line-height:6.2rem}.header__links.svelte-ogqfcg{display:flex;flex-direction:row;align-items:center;list-style:none}.header__links_item.svelte-ogqfcg{margin-left:1rem}.header__links_item.svelte-ogqfcg:last-child{margin-right:1rem}.header__links__item__link.svelte-ogqfcg{padding-bottom:0.2rem;color:var(--secondary-color);text-decoration:none}.header__links__item__link.svelte-ogqfcg:hover{border-bottom:1.5px solid var(--secondary-color)}",
  map: null
};
const Header = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  $$result.css.add(css$3);
  return `<nav class="${"header svelte-ogqfcg"}"><a href="${"/"}" class="${"header__title svelte-ogqfcg"}">${escape(blogMetaData.blogTitle)}</a>
  <ul class="${"header__links svelte-ogqfcg"}"><li class="${"header__links_item svelte-ogqfcg"}"><a href="${"/"}" class="${"header__links__item__link svelte-ogqfcg"}">Home</a></li>
    <li class="${"header__links_item svelte-ogqfcg"}"><a href="${"/about"}" class="${"header__links__item__link svelte-ogqfcg"}">About</a></li></ul>
</nav>`;
});
var Container_svelte_svelte_type_style_lang = "";
const css$2 = {
  code: ".container.svelte-1a1mbsh{max-width:768px;margin:0 auto}",
  map: null
};
const Container = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  $$result.css.add(css$2);
  return `<div class="${"container svelte-1a1mbsh"}">${slots.default ? slots.default({}) : ``}</div>`;
});
var Content_svelte_svelte_type_style_lang = "";
const css$1 = {
  code: ".content.svelte-1an4r9x{padding:1rem}",
  map: null
};
const Content = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  $$result.css.add(css$1);
  return `<div class="${"content svelte-1an4r9x"}">${slots.default ? slots.default({}) : ``}</div>`;
});
var Footer_svelte_svelte_type_style_lang = "";
const css = {
  code: ".footer.svelte-xvjn43{height:6rem;display:flex;justify-content:center;flex-direction:row}.footer__links.svelte-xvjn43{display:flex;flex-direction:row;align-items:center;list-style:none}.footer__links_item.svelte-xvjn43{margin-left:1rem}.footer__links_item.svelte-xvjn43:last-child{margin-right:1rem}.footer__links__item__link.svelte-xvjn43{padding-bottom:0.2rem;color:var(--secondary-color);text-decoration:none}.footer__links__item__link.svelte-xvjn43:hover{border-bottom:1.5px solid var(--secondary-color)}.footer__copy-right.svelte-xvjn43{color:var(--secondary-color)}",
  map: null
};
const Footer = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  $$result.css.add(css);
  return `<footer class="${"footer svelte-xvjn43"}"><ul class="${"footer__links svelte-xvjn43"}"><li class="${"footer__links_item svelte-xvjn43"}"><a href="${"/"}" class="${"footer__links__item__link svelte-xvjn43"}">Home</a></li>
    <li class="${"footer__links_item svelte-xvjn43"}"><a href="${"/about"}" class="${"footer__links__item__link svelte-xvjn43"}">About</a></li>
    <li class="${"footer__links_item svelte-xvjn43"}"><a href="${"/rss.xml"}" class="${"footer__links__item__link svelte-xvjn43"}">RSS Feed</a></li>
    <li class="${"footer__links_item svelte-xvjn43"}"><span class="${"footer__copy-right svelte-xvjn43"}">\xA9 2021 Yourname</span></li></ul>
</footer>`;
});
const _layout = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `${validate_component(Container, "Container").$$render($$result, {}, {}, {
    default: () => {
      return `${validate_component(Header, "Header").$$render($$result, {}, {}, {})}
  ${validate_component(Content, "Content").$$render($$result, {}, {}, {
        default: () => {
          return `${slots.default ? slots.default({}) : ``}`;
        }
      })}
  ${validate_component(Footer, "Footer").$$render($$result, {}, {}, {})}`;
    }
  })}`;
});
export { _layout as default };
