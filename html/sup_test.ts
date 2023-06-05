import { assertEquals } from "asserts";
import { renderToString } from "../deps.ts";
import { sup } from "./sup.ts";

Deno.test("sup tag element", async (t) => {
  await t.step("sup without attributes", async () => {
    const actual = sup("Content");

    const expected = `<sup>Content</sup>`;

    const rendered = await renderToString(actual, { minify: true });
    assertEquals(rendered, expected);
  });

  await t.step("sup with attributes", async () => {
    const actual = sup(
      "Content",
      {
        attributes: {},
      },
    );

    const expected = `<sup>Content</sup>`;
    const rendered = await renderToString(actual, { minify: true });
    assertEquals(rendered, expected);
  });
});
