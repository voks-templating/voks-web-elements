import { assertEquals } from "asserts";
import { minify, renderToString } from "../deps.ts";
import { sup } from "./sup.ts";

Deno.test("sup tag element", async (t) => {
  await t.step("sup without attributes", async () => {
    const actual = sup("Content");

    const expected = `<sup>Content</sup>`;

    const rendered = minify(await renderToString(actual));
    assertEquals(rendered, expected);
  });

  await t.step("sup with attributes", async () => {
    const actual = sup(
      "Content",
      {},
    );

    const expected = `<sup>Content</sup>`;
    const rendered = minify(await renderToString(actual));
    assertEquals(rendered, expected);
  });
});
