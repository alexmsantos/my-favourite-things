import { c as create_ssr_component, e as escape, a as add_attribute, b as each, d as spread, f as escape_object } from "./index-5cd6ad40.js";
const MetaTags = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { title = "" } = $$props;
  let { noindex = false } = $$props;
  let { nofollow = false } = $$props;
  let { robotsProps = void 0 } = $$props;
  let { description = void 0 } = $$props;
  let { mobileAlternate = void 0 } = $$props;
  let { languageAlternates = void 0 } = $$props;
  let { twitter = void 0 } = $$props;
  let { facebook = void 0 } = $$props;
  let { openGraph = void 0 } = $$props;
  let { canonical = void 0 } = $$props;
  let { additionalMetaTags = void 0 } = $$props;
  let { additionalLinkTags = void 0 } = $$props;
  let robotsParams = "";
  if (robotsProps) {
    const { nosnippet, maxSnippet, maxImagePreview, maxVideoPreview, noarchive, noimageindex, notranslate, unavailableAfter } = robotsProps;
    robotsParams = `${nosnippet ? ",nosnippet" : ""}${maxSnippet ? `,max-snippet:${maxSnippet}` : ""}${maxImagePreview ? `,max-image-preview:${maxImagePreview}` : ""}${noarchive ? ",noarchive" : ""}${unavailableAfter ? `,unavailable_after:${unavailableAfter}` : ""}${noimageindex ? ",noimageindex" : ""}${maxVideoPreview ? `,max-video-preview:${maxVideoPreview}` : ""}${notranslate ? ",notranslate" : ""}`;
  }
  if ($$props.title === void 0 && $$bindings.title && title !== void 0)
    $$bindings.title(title);
  if ($$props.noindex === void 0 && $$bindings.noindex && noindex !== void 0)
    $$bindings.noindex(noindex);
  if ($$props.nofollow === void 0 && $$bindings.nofollow && nofollow !== void 0)
    $$bindings.nofollow(nofollow);
  if ($$props.robotsProps === void 0 && $$bindings.robotsProps && robotsProps !== void 0)
    $$bindings.robotsProps(robotsProps);
  if ($$props.description === void 0 && $$bindings.description && description !== void 0)
    $$bindings.description(description);
  if ($$props.mobileAlternate === void 0 && $$bindings.mobileAlternate && mobileAlternate !== void 0)
    $$bindings.mobileAlternate(mobileAlternate);
  if ($$props.languageAlternates === void 0 && $$bindings.languageAlternates && languageAlternates !== void 0)
    $$bindings.languageAlternates(languageAlternates);
  if ($$props.twitter === void 0 && $$bindings.twitter && twitter !== void 0)
    $$bindings.twitter(twitter);
  if ($$props.facebook === void 0 && $$bindings.facebook && facebook !== void 0)
    $$bindings.facebook(facebook);
  if ($$props.openGraph === void 0 && $$bindings.openGraph && openGraph !== void 0)
    $$bindings.openGraph(openGraph);
  if ($$props.canonical === void 0 && $$bindings.canonical && canonical !== void 0)
    $$bindings.canonical(canonical);
  if ($$props.additionalMetaTags === void 0 && $$bindings.additionalMetaTags && additionalMetaTags !== void 0)
    $$bindings.additionalMetaTags(additionalMetaTags);
  if ($$props.additionalLinkTags === void 0 && $$bindings.additionalLinkTags && additionalLinkTags !== void 0)
    $$bindings.additionalLinkTags(additionalLinkTags);
  return `${$$result.head += `${$$result.title = `<title>${escape(title)}</title>`, ""}<meta name="${"robots"}"${add_attribute("content", `${noindex ? "noindex" : "index"},${nofollow ? "nofollow" : "follow"}${robotsParams}`, 0)} data-svelte="svelte-1g11zn"><meta name="${"googlebot"}"${add_attribute("content", `${noindex ? "noindex" : "index"},${nofollow ? "nofollow" : "follow"}${robotsParams}`, 0)} data-svelte="svelte-1g11zn">${description ? `<meta name="${"description"}"${add_attribute("content", description, 0)} data-svelte="svelte-1g11zn">` : ``}${canonical ? `<link rel="${"canonical"}"${add_attribute("href", canonical, 0)} data-svelte="svelte-1g11zn">` : ``}${mobileAlternate ? `<link rel="${"alternate"}"${add_attribute("media", mobileAlternate.media, 0)}${add_attribute("href", mobileAlternate.href, 0)} data-svelte="svelte-1g11zn">` : ``}${languageAlternates && languageAlternates.length > 0 ? `${each(languageAlternates, (languageAlternate) => {
    return `<link rel="${"alternate"}"${add_attribute("hreflang", languageAlternate.hrefLang, 0)}${add_attribute("href", languageAlternate.href, 0)} data-svelte="svelte-1g11zn">`;
  })}` : ``}${twitter ? `${twitter.cardType ? `<meta name="${"twitter:card"}"${add_attribute("content", twitter.cardType, 0)} data-svelte="svelte-1g11zn">` : ``}
    ${twitter.site ? `<meta name="${"twitter:site"}"${add_attribute("content", twitter.site, 0)} data-svelte="svelte-1g11zn">` : ``}
    ${twitter.handle ? `<meta name="${"twitter:creator"}"${add_attribute("content", twitter.handle, 0)} data-svelte="svelte-1g11zn">` : ``}
    ${twitter.title ? `<meta name="${"twitter:title"}"${add_attribute("content", twitter.title, 0)} data-svelte="svelte-1g11zn">` : ``}
    ${twitter.description ? `<meta name="${"twitter:description"}"${add_attribute("content", twitter.description, 0)} data-svelte="svelte-1g11zn">` : ``}
    ${twitter.image ? `<meta name="${"twitter:image"}"${add_attribute("content", twitter.image, 0)} data-svelte="svelte-1g11zn">` : ``}
    ${twitter.imageAlt ? `<meta name="${"twitter:image:alt"}"${add_attribute("content", twitter.imageAlt, 0)} data-svelte="svelte-1g11zn">` : ``}` : ``}${facebook ? `<meta property="${"fb:app_id"}"${add_attribute("content", facebook.appId, 0)} data-svelte="svelte-1g11zn">` : ``}${openGraph ? `${openGraph.url || canonical ? `<meta property="${"og:url"}"${add_attribute("content", openGraph.url || canonical, 0)} data-svelte="svelte-1g11zn">` : ``}

    ${openGraph.type ? `<meta property="${"og:type"}"${add_attribute("content", openGraph.type.toLowerCase(), 0)} data-svelte="svelte-1g11zn">
      ${openGraph.type.toLowerCase() === "profile" && openGraph.profile ? `${openGraph.profile.firstName ? `<meta property="${"profile:first_name"}"${add_attribute("content", openGraph.profile.firstName, 0)} data-svelte="svelte-1g11zn">` : ``}

        ${openGraph.profile.lastName ? `<meta property="${"profile:last_name"}"${add_attribute("content", openGraph.profile.lastName, 0)} data-svelte="svelte-1g11zn">` : ``}

        ${openGraph.profile.username ? `<meta property="${"profile:username"}"${add_attribute("content", openGraph.profile.username, 0)} data-svelte="svelte-1g11zn">` : ``}

        ${openGraph.profile.gender ? `<meta property="${"profile:gender"}"${add_attribute("content", openGraph.profile.gender, 0)} data-svelte="svelte-1g11zn">` : ``}` : `${openGraph.type.toLowerCase() === "book" && openGraph.book ? `${openGraph.book.authors && openGraph.book.authors.length ? `${each(openGraph.book.authors, (author) => {
    return `<meta property="${"book:author"}"${add_attribute("content", author, 0)} data-svelte="svelte-1g11zn">`;
  })}` : ``}

        ${openGraph.book.isbn ? `<meta property="${"book:isbn"}"${add_attribute("content", openGraph.book.isbn, 0)} data-svelte="svelte-1g11zn">` : ``}

        ${openGraph.book.releaseDate ? `<meta property="${"book:release_date"}"${add_attribute("content", openGraph.book.releaseDate, 0)} data-svelte="svelte-1g11zn">` : ``}

        ${openGraph.book.tags && openGraph.book.tags.length ? `${each(openGraph.book.tags, (tag) => {
    return `<meta property="${"book:tag"}"${add_attribute("content", tag, 0)} data-svelte="svelte-1g11zn">`;
  })}` : ``}` : `${openGraph.type.toLowerCase() === "article" && openGraph.article ? `${openGraph.article.publishedTime ? `<meta property="${"article:published_time"}"${add_attribute("content", openGraph.article.publishedTime, 0)} data-svelte="svelte-1g11zn">` : ``}

        ${openGraph.article.modifiedTime ? `<meta property="${"article:modified_time"}"${add_attribute("content", openGraph.article.modifiedTime, 0)} data-svelte="svelte-1g11zn">` : ``}

        ${openGraph.article.expirationTime ? `<meta property="${"article:expiration_time"}"${add_attribute("content", openGraph.article.expirationTime, 0)} data-svelte="svelte-1g11zn">` : ``}

        ${openGraph.article.authors && openGraph.article.authors.length ? `${each(openGraph.article.authors, (author) => {
    return `<meta property="${"article:author"}"${add_attribute("content", author, 0)} data-svelte="svelte-1g11zn">`;
  })}` : ``}

        ${openGraph.article.section ? `<meta property="${"article:section"}"${add_attribute("content", openGraph.article.section, 0)} data-svelte="svelte-1g11zn">` : ``}

        ${openGraph.article.tags && openGraph.article.tags.length ? `${each(openGraph.article.tags, (tag) => {
    return `<meta property="${"article:tag"}"${add_attribute("content", tag, 0)} data-svelte="svelte-1g11zn">`;
  })}` : ``}` : `${openGraph.type.toLowerCase() === "video.movie" || openGraph.type.toLowerCase() === "video.episode" || openGraph.type.toLowerCase() === "video.tv_show" || openGraph.type.toLowerCase() === "video.other" && openGraph.video ? `${openGraph.video.actors && openGraph.video.actors.length ? `${each(openGraph.video.actors, (actor) => {
    return `${actor.profile ? `<meta property="${"video:actor"}"${add_attribute("content", actor.profile, 0)} data-svelte="svelte-1g11zn">` : ``}
            ${actor.role ? `<meta property="${"video:actor:role"}"${add_attribute("content", actor.role, 0)} data-svelte="svelte-1g11zn">` : ``}`;
  })}` : ``}

        ${openGraph.video.directors && openGraph.video.directors.length ? `${each(openGraph.video.directors, (director) => {
    return `<meta property="${"video:director"}"${add_attribute("content", director, 0)} data-svelte="svelte-1g11zn">`;
  })}` : ``}

        ${openGraph.video.writers && openGraph.video.writers.length ? `${each(openGraph.video.writers, (writer) => {
    return `<meta property="${"video:writer"}"${add_attribute("content", writer, 0)} data-svelte="svelte-1g11zn">`;
  })}` : ``}

        ${openGraph.video.duration ? `<meta property="${"video:duration"}"${add_attribute("content", openGraph.video.duration.toString(), 0)} data-svelte="svelte-1g11zn">` : ``}

        ${openGraph.video.releaseDate ? `<meta property="${"video:release_date"}"${add_attribute("content", openGraph.video.releaseDate, 0)} data-svelte="svelte-1g11zn">` : ``}

        ${openGraph.video.tags && openGraph.video.tags.length ? `${each(openGraph.video.tags, (tag) => {
    return `<meta property="${"video:tag"}"${add_attribute("content", tag, 0)} data-svelte="svelte-1g11zn">`;
  })}` : ``}

        ${openGraph.video.series ? `<meta property="${"video:series"}"${add_attribute("content", openGraph.video.series, 0)} data-svelte="svelte-1g11zn">` : ``}` : ``}`}`}`}` : ``}

    ${openGraph.title || title ? `<meta property="${"og:title"}"${add_attribute("content", openGraph.title || title, 0)} data-svelte="svelte-1g11zn">` : ``}

    ${openGraph.description || description ? `<meta property="${"og:description"}"${add_attribute("content", openGraph.description || description, 0)} data-svelte="svelte-1g11zn">` : ``}

    ${openGraph.images && openGraph.images.length ? `${each(openGraph.images, (image) => {
    return `<meta property="${"og:image"}"${add_attribute("content", image.url, 0)} data-svelte="svelte-1g11zn">
        ${image.alt ? `<meta property="${"og:image:alt"}"${add_attribute("content", image.alt, 0)} data-svelte="svelte-1g11zn">` : ``}
        ${image.width ? `<meta property="${"og:image:width"}"${add_attribute("content", image.width.toString(), 0)} data-svelte="svelte-1g11zn">` : ``}
        ${image.height ? `<meta property="${"og:image:height"}"${add_attribute("content", image.height.toString(), 0)} data-svelte="svelte-1g11zn">` : ``}`;
  })}` : ``}

    ${openGraph.videos && openGraph.videos.length ? `${each(openGraph.videos, (video) => {
    return `<meta property="${"og:video"}"${add_attribute("content", video.url, 0)} data-svelte="svelte-1g11zn">
        ${video.alt ? `<meta property="${"og:video:alt"}"${add_attribute("content", video.alt, 0)} data-svelte="svelte-1g11zn">` : ``}
        ${video.width ? `<meta property="${"og:video:width"}"${add_attribute("content", video.width.toString(), 0)} data-svelte="svelte-1g11zn">` : ``}
        ${video.height ? `<meta property="${"og:video:height"}"${add_attribute("content", video.height.toString(), 0)} data-svelte="svelte-1g11zn">` : ``}
        ${video.secureUrl ? `<meta property="${"og:video:secure_url"}"${add_attribute("content", video.secureUrl.toString(), 0)} data-svelte="svelte-1g11zn">` : ``}
        ${video.type ? `<meta property="${"og:video:type"}"${add_attribute("content", video.type.toString(), 0)} data-svelte="svelte-1g11zn">` : ``}`;
  })}` : ``}

    ${openGraph.locale ? `<meta property="${"og:locale"}"${add_attribute("content", openGraph.locale, 0)} data-svelte="svelte-1g11zn">` : ``}

    ${openGraph.site_name ? `<meta property="${"og:site_name"}"${add_attribute("content", openGraph.site_name, 0)} data-svelte="svelte-1g11zn">` : ``}` : ``}${additionalMetaTags && additionalMetaTags.length > 0 ? `${each(additionalMetaTags, (tag) => {
    return `<meta${spread([escape_object(tag)], {})} data-svelte="svelte-1g11zn">`;
  })}` : ``}${additionalLinkTags?.length ? `${each(additionalLinkTags, (tag) => {
    return `<link${spread([escape_object(tag)], {})} data-svelte="svelte-1g11zn">`;
  })}` : ``}`, ""}`;
});
export { MetaTags as M };
