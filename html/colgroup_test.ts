import { assertEquals } from "asserts";
import { renderToString } from "../deps.ts";
import { colgroup } from "./colgroup.ts";

Deno.test("colgroup tag element", async (t) => {
  await t.step("colgroup without attributes", async () => {
    const actual = colgroup("Content");

    const expected = `<colgroup>Content</colgroup>`;

    const rendered = await renderToString(actual, { minify: true });
    assertEquals(rendered, expected);
  });

  await t.step("colgroup with attributes", async () => {
    const actual = colgroup(
      "Content",
      {
        span: 2,
      },
    );

    const expected = `<colgroup span="2">Content</colgroup>`;
    const rendered = await renderToString(actual, { minify: true });
    assertEquals(rendered, expected);
  });
});
