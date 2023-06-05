import { assertEquals } from "asserts";
import { renderToString } from "../deps.ts";
import { mark } from "./mark.ts";

Deno.test("mark tag element", async (t) => {
  await t.step("mark without attributes", async () => {
    const actual = mark("Content");

    const expected = `<mark>Content</mark>`;

    const rendered = await renderToString(actual, { minify: true });
    assertEquals(rendered, expected);
  });

  await t.step("mark with attributes", async () => {
    const actual = mark(
      "Content",
      {
        attributes: {},
      },
    );

    const expected = `<mark>Content</mark>`;
    const rendered = await renderToString(actual, { minify: true });
    assertEquals(rendered, expected);
  });
});
