import { assertEquals } from "asserts";
import { minify, renderToString } from "../deps.ts";
import { summary } from "./summary.ts";

Deno.test("summary tag element", async (t) => {
  await t.step("summary without attributes", async () => {
    const actual = summary("Content");

    const expected = `<summary>Content</summary>`;

    const rendered = minify(await renderToString(actual));
    assertEquals(rendered, expected);
  });

  await t.step("summary with attributes", async () => {
    const actual = summary(
      "Content",
    );

    const expected = `<summary>Content</summary>`;
    const rendered = minify(await renderToString(actual));
    assertEquals(rendered, expected);
  });
});
