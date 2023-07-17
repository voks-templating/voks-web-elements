import { assertEquals } from "asserts";
import { minify, renderToString } from "../deps.ts";
import { noscript } from "./noscript.ts";

Deno.test("noscript tag element", async (t) => {
  await t.step("noscript without attributes", async () => {
    const actual = noscript("Content");

    const expected = `<noscript>Content</noscript>`;

    const rendered = minify(await renderToString(actual));
    assertEquals(rendered, expected);
  });

  await t.step("noscript with attributes", async () => {
    const actual = noscript(
      "Content",
    );

    const expected = `<noscript>Content</noscript>`;
    const rendered = minify(await renderToString(actual));
    assertEquals(rendered, expected);
  });
});
