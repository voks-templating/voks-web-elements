import { assertEquals } from "asserts";
import { minify, renderToString } from "../deps.ts";
import { dt } from "./dt.ts";

Deno.test("dt tag element", async (t) => {
  await t.step("dt without attributes", async () => {
    const actual = dt("Content");

    const expected = `<dt>Content</dt>`;

    const rendered = minify(await renderToString(actual));
    assertEquals(rendered, expected);
  });

  await t.step("dt with attributes", async () => {
    const actual = dt(
      "Content",
      {},
    );

    const expected = `<dt>Content</dt>`;
    const rendered = minify(await renderToString(actual));
    assertEquals(rendered, expected);
  });
});
