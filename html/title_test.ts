import { assertEquals } from "asserts";
import { minify, renderToString } from "../deps.ts";
import { title } from "./title.ts";

Deno.test("title tag element", async (t) => {
  await t.step("title without attributes", async () => {
    const actual = title("Content");

    const expected = `<title>Content</title>`;

    const rendered = minify(await renderToString(actual));
    assertEquals(rendered, expected);
  });

  await t.step("title with attributes", async () => {
    const actual = title(
      "Content",
    );

    const expected = `<title>Content</title>`;
    const rendered = minify(await renderToString(actual));
    assertEquals(rendered, expected);
  });
});
