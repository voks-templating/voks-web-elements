import { assertEquals } from "asserts";
import { minify, renderToString } from "../deps.ts";
import { h5 } from "./h5.ts";

Deno.test("h5 tag element", async (t) => {
  await t.step("h5 without attributes", async () => {
    const actual = h5("Content");

    const expected = `<h5>Content</h5>`;

    const rendered = minify(await renderToString(actual));
    assertEquals(rendered, expected);
  });

  await t.step("h5 with attributes", async () => {
    const actual = h5(
      "Content",
    );

    const expected = `<h5>Content</h5>`;
    const rendered = minify(await renderToString(actual));
    assertEquals(rendered, expected);
  });
});
