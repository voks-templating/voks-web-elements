import { assertEquals } from "asserts";
import { minify, renderToString } from "../deps.ts";
import { h6 } from "./h6.ts";

Deno.test("h6 tag element", async (t) => {
  await t.step("h6 without attributes", async () => {
    const actual = h6("Content");

    const expected = `<h6>Content</h6>`;

    const rendered = minify(await renderToString(actual));
    assertEquals(rendered, expected);
  });

  await t.step("h6 with attributes", async () => {
    const actual = h6(
      "Content",
    );

    const expected = `<h6>Content</h6>`;
    const rendered = minify(await renderToString(actual));
    assertEquals(rendered, expected);
  });
});
