import type { APIRoute } from "astro";
import { graph } from "../utils/structuredData";

/** The same schema.org graph the page embeds, fetchable on its own. */
export const GET: APIRoute = () =>
  new Response(JSON.stringify(graph, null, 2), {
    headers: {
      "Content-Type": "application/ld+json; charset=utf-8",
      "Cache-Control": "public, max-age=3600",
    },
  });
