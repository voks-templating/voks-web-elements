import { assertEquals } from "asserts";
import { minify, renderToString } from "../deps.ts";
import { embed } from "./embed.ts";

Deno.test("embed tag element", async (t) => {
  await t.step("embed without attributes", async () => {
    const actual = embed("Content");

    const expected = `<embed>Content</embed>`;

    const rendered = minify(await renderToString(actual));
    assertEquals(rendered, expected);
  });

  await t.step("embed with attributes", async () => {
    const actual = embed(
      {
        height: 100,
        src: "https://example.com",
        type: "video/mp4",
        width: 100,
      },
      "Content",
    );

    const expected =
      `<embed height="100" src="https://example.com" type="video/mp4" width="100">Content</embed>`;
    const rendered = minify(await renderToString(actual));
    assertEquals(rendered, expected);
  });
});
