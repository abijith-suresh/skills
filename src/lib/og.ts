import { readFile, writeFile } from "node:fs/promises";
import path from "node:path";
import { Resvg } from "@resvg/resvg-js";
import satori from "satori";
import type { OgRoute } from "./route-metadata";
import { SITE } from "./site-metadata";

type SatoriFonts = Awaited<ReturnType<typeof loadFontsInternal>>;

const PUBLIC_DIR = path.join(process.cwd(), "public");
const ASSET_FONT_DIR = path.join(process.cwd(), "src/assets/fonts");
const OG_WIDTH = 1200;
const OG_HEIGHT = 630;

// Satori needs sRGB hex, so the Dusk Aurora CSS tokens are mirrored here.
// These are the canonical conversions from the Dusk Aurora House Standard:
// --color-bg, --color-text, --color-muted, the composited hairline, and
// --color-pink (oklch(83.9% 0.069 3)).
const OG_BG = "#1a1823";
const OG_TEXT = "#e0ddef";
const OG_MUTED = "#a09aad";
const OG_HAIRLINE = "#312f39";
const OG_PINK = "#f2b8c6";
const SITE_DOMAIN = new URL(SITE.url).hostname;
let fontCache: SatoriFonts | undefined;

export async function renderOgPng(route: OgRoute) {
  const svg = await renderOgSvg(route);
  return renderPng(svg, OG_WIDTH);
}

export async function generateSiteIcons() {
  const faviconSvg = withSvgTitle(await renderIconSvg(512), SITE.title);
  const faviconPng = renderPng(faviconSvg, 32);
  const applePng = renderPng(faviconSvg, 180);

  await writeFileIfChanged(path.join(PUBLIC_DIR, "favicon.svg"), faviconSvg);
  await writeFileIfChanged(path.join(PUBLIC_DIR, "favicon.ico"), createIco(faviconPng, 32, 32));
  await writeFileIfChanged(path.join(PUBLIC_DIR, "apple-touch-icon.png"), applePng);
}

async function renderOgSvg(route: OgRoute) {
  const fonts = await loadFonts();
  const titleLines = wrapText(route.title, 24, 3);
  const descriptionLines = wrapText(route.description, 58, 3);

  return satori(
    {
      type: "div",
      props: {
        style: {
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          backgroundColor: OG_BG,
          color: OG_TEXT,
          padding: 72,
          fontFamily: "IBM Plex Sans",
        },
        children: [
          {
            type: "div",
            props: {
              style: {
                display: "flex",
                flexDirection: "column",
                gap: 58,
              },
              children: [
                {
                  type: "div",
                  props: {
                    style: {
                      width: "100%",
                      height: 1,
                      backgroundColor: OG_HAIRLINE,
                    },
                  },
                },
                {
                  type: "div",
                  props: {
                    style: {
                      display: "flex",
                      flexDirection: "column",
                      gap: 56,
                    },
                    children: [
                      {
                        type: "div",
                        props: {
                          style: {
                            color: OG_MUTED,
                            fontFamily: "IBM Plex Mono",
                            fontSize: 24,
                            fontWeight: 500,
                            letterSpacing: 3,
                            textTransform: "uppercase",
                          },
                          children: route.label,
                        },
                      },
                      {
                        type: "div",
                        props: {
                          style: {
                            display: "flex",
                            flexDirection: "column",
                            gap: 10,
                          },
                          children: titleLines.map((line) => ({
                            type: "div",
                            props: {
                              style: {
                                fontSize: 64,
                                fontWeight: 500,
                                lineHeight: 1.04,
                              },
                              children: line,
                            },
                          })),
                        },
                      },
                      {
                        type: "div",
                        props: {
                          style: {
                            display: "flex",
                            flexDirection: "column",
                            gap: 8,
                            color: OG_MUTED,
                            fontSize: 32,
                            lineHeight: 1.25,
                          },
                          children: descriptionLines.map((line) => ({
                            type: "div",
                            props: { children: line },
                          })),
                        },
                      },
                    ],
                  },
                },
              ],
            },
          },
          {
            type: "div",
            props: {
              style: {
                display: "flex",
                flexDirection: "column",
                gap: 24,
              },
              children: [
                {
                  type: "div",
                  props: {
                    style: {
                      fontSize: 28,
                      fontWeight: 500,
                    },
                    children: SITE_DOMAIN,
                  },
                },
                {
                  type: "div",
                  props: {
                    style: {
                      width: "100%",
                      height: 1,
                      backgroundColor: OG_HAIRLINE,
                    },
                  },
                },
              ],
            },
          },
        ],
      },
    },
    {
      width: OG_WIDTH,
      height: OG_HEIGHT,
      fonts,
    }
  );
}

// The "as." monogram brands the site as part of the abijith.sh family:
// lowercase letterforms with the signature pink period on the violet
// rounded tile. Plex Sans Medium is the heaviest cut satori can embed
// (woff2 variable fonts are unsupported), so a generous size carries
// legibility at 16px.
async function renderIconSvg(size: number) {
  const fonts = await loadFonts();

  return satori(
    {
      type: "div",
      props: {
        style: {
          width: "100%",
          height: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          backgroundColor: OG_BG,
          color: OG_TEXT,
          borderRadius: size * 0.16,
          fontFamily: "IBM Plex Sans",
        },
        children: {
          type: "div",
          props: {
            style: {
              display: "flex",
              alignItems: "baseline",
              // optical centering: x-height glyphs ride low in the
              // centered line box
              transform: "translateY(-6%)",
            },
            children: [
              {
                type: "span",
                props: {
                  style: {
                    fontSize: size * 0.52,
                    fontWeight: 500,
                    letterSpacing: "-0.02em",
                  },
                  children: "as",
                },
              },
              {
                type: "span",
                props: {
                  style: {
                    fontSize: size * 0.52,
                    fontWeight: 500,
                    color: OG_PINK,
                  },
                  children: ".",
                },
              },
            ],
          },
        },
      },
    },
    {
      width: size,
      height: size,
      fonts,
    }
  );
}

async function loadFonts() {
  fontCache ??= await loadFontsInternal();
  return fontCache;
}

async function loadFontsInternal() {
  const sansRegular = await readFile(path.join(ASSET_FONT_DIR, "IBMPlexSans-Regular.ttf"));
  const sansMedium = await readFile(path.join(ASSET_FONT_DIR, "IBMPlexSans-Medium.ttf"));
  const monoMedium = await readFile(path.join(ASSET_FONT_DIR, "IBMPlexMono-Medium.ttf"));

  return [
    {
      name: "IBM Plex Sans",
      data: sansRegular,
      weight: 400 as const,
      style: "normal" as const,
    },
    {
      name: "IBM Plex Sans",
      data: sansMedium,
      weight: 500 as const,
      style: "normal" as const,
    },
    {
      name: "IBM Plex Mono",
      data: monoMedium,
      weight: 500 as const,
      style: "normal" as const,
    },
  ];
}

async function writeFileIfChanged(filePath: string, content: string | Buffer) {
  const next = Buffer.isBuffer(content) ? content : Buffer.from(content);

  try {
    const current = await readFile(filePath);
    if (current.equals(next)) return;
  } catch {
    // Missing files should be created.
  }

  await writeFile(filePath, next);
}

function renderPng(svg: string, width: number) {
  return Buffer.from(
    new Resvg(svg, {
      fitTo: {
        mode: "width",
        value: width,
      },
      font: {
        loadSystemFonts: false,
      },
    })
      .render()
      .asPng()
  );
}

function withSvgTitle(svg: string, title: string) {
  const escapedTitle = title
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&apos;");

  return svg.replace(/<svg([^>]*)>/, `<svg$1><title>${escapedTitle}</title>`);
}

function createIco(png: Buffer, width: number, height: number) {
  const header = Buffer.alloc(6);
  header.writeUInt16LE(0, 0);
  header.writeUInt16LE(1, 2);
  header.writeUInt16LE(1, 4);

  const directory = Buffer.alloc(16);
  directory.writeUInt8(width >= 256 ? 0 : width, 0);
  directory.writeUInt8(height >= 256 ? 0 : height, 1);
  directory.writeUInt8(0, 2);
  directory.writeUInt8(0, 3);
  directory.writeUInt16LE(1, 4);
  directory.writeUInt16LE(32, 6);
  directory.writeUInt32LE(png.length, 8);
  directory.writeUInt32LE(header.length + directory.length, 12);

  return Buffer.concat([header, directory, png]);
}

function wrapText(text: string, maxChars: number, maxLines: number) {
  const words = text.replace(/\s+/g, " ").trim().split(" ");
  const lines: string[] = [];
  let line = "";

  for (const word of words) {
    const nextLine = line ? `${line} ${word}` : word;
    if (nextLine.length <= maxChars) {
      line = nextLine;
      continue;
    }

    if (line) lines.push(line);
    line = word;
    if (lines.length === maxLines) break;
  }

  if (line && lines.length < maxLines) lines.push(line);

  if (lines.length === maxLines && words.join(" ").length > lines.join(" ").length) {
    const lastLine = lines[maxLines - 1] ?? "";
    lines[maxLines - 1] = `${lastLine.replace(/\s+\S*$/, "")}...`;
  }

  return lines;
}
