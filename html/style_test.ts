import { assertEquals } from "asserts";
import { minify, renderToString } from "../deps.ts";
import { style } from "./style.ts";

Deno.test("style tag element", async (t) => {
  await t.step("style without attributes", async () => {
    const actual = style("Content");

    const expected = `<style>Content</style>`;

    const rendered = minify(await renderToString(actual));
    assertEquals(rendered, expected);
  });

  await t.step("style with attributes", async () => {
    const actual = style(
      {
        media: "test",
        nonce: "test",
        title: "test",
      },
      "Content",
    );

    const expected =
      `<style media="test" nonce="test" title="test">Content</style>`;
    const rendered = minify(await renderToString(actual));
    assertEquals(rendered, expected);
  });
});
