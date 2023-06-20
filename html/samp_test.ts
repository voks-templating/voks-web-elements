import { assertEquals } from "asserts";
import { renderToString, minify } from "../deps.ts";
import { samp } from "./samp.ts";

Deno.test("samp tag element", async (t) => {
  await t.step("samp without attributes", async () => {
    const actual = samp("Content");

    const expected = `<samp>Content</samp>`;

    const rendered = minify(await renderToString(actual));
    assertEquals(rendered, expected);
  });

  await t.step("samp with attributes", async () => {
    const actual = samp(
      "Content",
      {},
    );

    const expected = `<samp>Content</samp>`;
    const rendered = minify(await renderToString(actual));
    assertEquals(rendered, expected);
  });
});
