import type { APIRoute } from "astro";

const references = import.meta.glob<string>("/skills/*/references/**/*.md", {
  query: "?raw",
  import: "default",
  eager: true,
});

export function getStaticPaths() {
  return Object.entries(references).map(([file, content]) => {
    const parts = file.split("/");
    return {
      params: { skill: parts[2], path: parts.slice(4).join("/") },
      props: { content },
    };
  });
}

export const GET: APIRoute = ({ props }) =>
  new Response(props.content, {
    headers: { "Content-Type": "text/markdown; charset=utf-8" },
  });
