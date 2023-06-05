import { assertEquals } from "asserts";
import { renderToString } from "../deps.ts";
import { img } from "./img.ts";

Deno.test("img tag element", async (t) => {
  await t.step("img without attributes", async () => {
    const actual = img();
    const expected = `<img \\>`;

    const rendered = await renderToString(actual, { minify: true });
    assertEquals(rendered, expected);
  });

  await t.step("img with attributes", async () => {
    const actual = img(
      {
        attributes: {
          alt: "Image",
          src: "image.png",
          crossorigin: "anonymous",
          decoding: "async",
          elementtiming: "example",
          fetchpriority: "low",
          height: 100,
          width: 100,
          ismap: true,
          loading: "lazy",
          referrerpolicy: "no-referrer",
          sizes: "100vw",
          srcset: "image.png",
          usemap: "#map",
        },
      },
    );

    const expected =
      `<img alt="Image" src="image.png" crossorigin="anonymous" decoding="async" elementtiming="example" fetchpriority="low" height="100" width="100" ismap loading="lazy" referrerpolicy="no-referrer" sizes="100vw" srcset="image.png" usemap="#map" \\>`;
    const rendered = await renderToString(actual, { minify: true });
    assertEquals(rendered, expected);
  });
});
