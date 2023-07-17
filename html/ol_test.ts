import { assertEquals } from "asserts";
import { minify, renderToString } from "../deps.ts";
import { ol } from "./ol.ts";

Deno.test("ol tag element", async (t) => {
  await t.step("ol without attributes", async () => {
    const actual = ol("Content");

    const expected = `<ol>Content</ol>`;

    const rendered = minify(await renderToString(actual));
    assertEquals(rendered, expected);
  });

  await t.step("ol with attributes", async () => {
    const actual = ol(
      {
        reversed: true,
        start: 2,
        type: "a",
      },
      "Content",
    );

    const expected = `<ol reversed start="2" type="a">Content</ol>`;
    const rendered = minify(await renderToString(actual));
    assertEquals(rendered, expected);
  });
});
