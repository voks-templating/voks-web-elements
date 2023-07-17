import { assertEquals } from "asserts";
import { minify, renderToString } from "../deps.ts";
import { picture } from "./picture.ts";

Deno.test("picture tag element", async (t) => {
  await t.step("picture without attributes", async () => {
    const actual = picture("Content");

    const expected = `<picture>Content</picture>`;

    const rendered = minify(await renderToString(actual));
    assertEquals(rendered, expected);
  });

  await t.step("picture with attributes", async () => {
    const actual = picture(
      "Content",
    );

    const expected = `<picture>Content</picture>`;
    const rendered = minify(await renderToString(actual));
    assertEquals(rendered, expected);
  });
});
