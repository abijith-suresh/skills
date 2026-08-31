import { getCollection } from "astro:content";
import type { APIRoute, GetStaticPaths } from "astro";
import { renderOgPng } from "../../lib/og";
import { buildOgRoutes, type OgRoute } from "../../lib/route-metadata";

export const prerender = true;

interface OgStaticPath {
  params: {
    slug: string;
  };
  props: {
    route: OgRoute;
  };
}

export const getStaticPaths: GetStaticPaths = async () => {
  const definitions = await getCollection("skillDefinitions");
  return buildOgRoutes(definitions).map((route) => path(route));
};

export const GET: APIRoute<{ route: OgRoute }> = async ({ props }) => {
  const png = await renderOgPng(props.route);

  return new Response(new Uint8Array(png), {
    headers: {
      "Content-Type": "image/png",
      "Cache-Control": "public, max-age=0, s-maxage=3600, stale-while-revalidate=86400",
    },
  });
};

function path(route: OgRoute): OgStaticPath {
  return {
    params: { slug: route.slug },
    props: { route },
  };
}
