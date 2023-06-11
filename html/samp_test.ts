import { assertEquals } from "asserts";
import { renderToString } from "../deps.ts";
import { samp } from "./samp.ts";

Deno.test("samp tag element", async (t) => {
  await t.step("samp without attributes", async () => {
    const actual = samp("Content");

    const expected = `<samp>Content</samp>`;

    const rendered = await renderToString(actual, { minify: true });
    assertEquals(rendered, expected);
  });

  await t.step("samp with attributes", async () => {
    const actual = samp(
      "Content",
      {},
    );

    const expected = `<samp>Content</samp>`;
    const rendered = await renderToString(actual, { minify: true });
    assertEquals(rendered, expected);
  });
});
