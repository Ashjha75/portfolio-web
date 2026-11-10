/**
 * Join a public-asset path onto the configured base.
 *
 * `import.meta.env.BASE_URL` is "/portfolio-web" with NO trailing slash here,
 * because astro.config sets `trailingSlash: "never"`. Naive template-literal
 * concatenation therefore produced "/portfolio-webimages/..." — so always use
 * this helper rather than interpolating BASE_URL directly.
 */
const BASE = import.meta.env.BASE_URL;

export const withBase = (path: string): string => {
  const root = BASE.endsWith("/") ? BASE.slice(0, -1) : BASE;
  return root + "/" + path.replace(/^\/+/, "");
};

/** The site root, for the wordmark link. */
export const homeHref = BASE.endsWith("/") ? BASE : BASE + "/";
