import { assertEquals } from "asserts";
import { renderToString, minify } from "../deps.ts";
import { small } from "./small.ts";

Deno.test("small tag element", async (t) => {
  await t.step("small without attributes", async () => {
    const actual = small("Content");

    const expected = `<small>Content</small>`;

    const rendered = minify(await renderToString(actual));
    assertEquals(rendered, expected);
  });

  await t.step("small with attributes", async () => {
    const actual = small(
      "Content",
      {},
    );

    const expected = `<small>Content</small>`;
    const rendered = minify(await renderToString(actual));
    assertEquals(rendered, expected);
  });
});
