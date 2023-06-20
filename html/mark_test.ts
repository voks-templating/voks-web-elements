import { assertEquals } from "asserts";
import { renderToString, minify } from "../deps.ts";
import { mark } from "./mark.ts";

Deno.test("mark tag element", async (t) => {
  await t.step("mark without attributes", async () => {
    const actual = mark("Content");

    const expected = `<mark>Content</mark>`;

    const rendered = minify(await renderToString(actual));
    assertEquals(rendered, expected);
  });

  await t.step("mark with attributes", async () => {
    const actual = mark(
      "Content",
      {},
    );

    const expected = `<mark>Content</mark>`;
    const rendered = minify(await renderToString(actual));
    assertEquals(rendered, expected);
  });
});
