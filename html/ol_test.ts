import { assertEquals } from "asserts";
import { renderToString } from "../deps.ts";
import { ol } from "./ol.ts";

Deno.test("ol tag element", async (t) => {
  await t.step("ol without attributes", async () => {
    const actual = ol("Content");

    const expected = `<ol>Content</ol>`;

    const rendered = await renderToString(actual, { minify: true });
    assertEquals(rendered, expected);
  });

  await t.step("ol with attributes", async () => {
    const actual = ol(
      "Content",
      {
        attributes: {
          reversed: true,
          start: 2,
          type: "a",
        },
      },
    );

    const expected = `<ol reversed start="2" type="a">Content</ol>`;
    const rendered = await renderToString(actual, { minify: true });
    assertEquals(rendered, expected);
  });
});
