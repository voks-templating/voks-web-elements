import { assertEquals } from "asserts";
import { renderToString } from "../deps.ts";
import { link } from "./link.ts";

Deno.test("link tag element", async (t) => {
  await t.step("link without attributes", async () => {
    const actual = link();

    const expected = `<link />`;

    const rendered = await renderToString(actual, { minify: true });
    assertEquals(rendered, expected);
  });

  await t.step("link with attributes", async () => {
    const actual = link(
      {
        as: "script",
        crossorigin: "anonymous",
        href: "https://deno.land/x",
        hreflang: "en",
        imagesizes: "100vw",
        imagesrcset: "https://deno.land/x",
        integrity: "sha256-1234567890",
        media: "screen",
        referrerpolicy: "no-referrer",
        rel: "preload",
        title: "Deno",
        type: "text/javascript",
      },
    );

    const expected =
      `<link as="script" crossorigin="anonymous" href="https://deno.land/x" hreflang="en" imagesizes="100vw" imagesrcset="https://deno.land/x" integrity="sha256-1234567890" media="screen" referrerpolicy="no-referrer" rel="preload" title="Deno" type="text/javascript" />`;
    const rendered = await renderToString(actual, { minify: true });
    assertEquals(rendered, expected);
  });
});
