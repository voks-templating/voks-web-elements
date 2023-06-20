import { assertEquals } from "asserts";
import { renderToString, minify } from "../deps.ts";
import { img } from "./img.ts";

Deno.test("img tag element", async (t) => {
  await t.step("img without attributes", async () => {
    const actual = img();
    const expected = `<img \\>`;

    const rendered = minify(await renderToString(actual));
    assertEquals(rendered, expected);
  });

  await t.step("img with attributes", async () => {
    const actual = img(
      {
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
    );

    const expected =
      `<img alt="Image" crossorigin="anonymous" decoding="async" elementtiming="example" fetchpriority="low" height="100" ismap loading="lazy" referrerpolicy="no-referrer" sizes="100vw" src="image.png" srcset="image.png" usemap="#map" width="100" \\>`;
    const rendered = minify(await renderToString(actual));
    assertEquals(rendered, expected);
  });
});
