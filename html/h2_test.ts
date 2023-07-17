import { assertEquals } from "asserts";
import { minify, renderToString } from "../deps.ts";
import { h2 } from "./h2.ts";

Deno.test("h2 tag element", async (t) => {
  await t.step("h2 without attributes", async () => {
    const actual = h2("Content");

    const expected = `<h2>Content</h2>`;

    const rendered = minify(await renderToString(actual));
    assertEquals(rendered, expected);
  });

  await t.step("h2 with attributes", async () => {
    const actual = h2(
      "Content",
    );

    const expected = `<h2>Content</h2>`;
    const rendered = minify(await renderToString(actual));
    assertEquals(rendered, expected);
  });
});
