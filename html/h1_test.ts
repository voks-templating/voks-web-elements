import { assertEquals } from "asserts";
import { minify, renderToString } from "../deps.ts";
import { h1 } from "./h1.ts";

Deno.test("h1 tag element", async (t) => {
  await t.step("h1 without attributes", async () => {
    const actual = h1("Content");

    const expected = `<h1>Content</h1>`;

    const rendered = minify(await renderToString(actual));
    assertEquals(rendered, expected);
  });

  await t.step("h1 with attributes", async () => {
    const actual = h1(
      "Content",
    );

    const expected = `<h1>Content</h1>`;
    const rendered = minify(await renderToString(actual));
    assertEquals(rendered, expected);
  });
});
