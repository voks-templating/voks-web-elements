import { assertEquals } from "asserts";
import { minify, renderToString } from "../deps.ts";
import { h4 } from "./h4.ts";

Deno.test("h4 tag element", async (t) => {
  await t.step("h4 without attributes", async () => {
    const actual = h4("Content");

    const expected = `<h4>Content</h4>`;

    const rendered = minify(await renderToString(actual));
    assertEquals(rendered, expected);
  });

  await t.step("h4 with attributes", async () => {
    const actual = h4(
      "Content",
      {},
    );

    const expected = `<h4>Content</h4>`;
    const rendered = minify(await renderToString(actual));
    assertEquals(rendered, expected);
  });
});
