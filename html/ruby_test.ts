import { assertEquals } from "asserts";
import { renderToString, minify } from "../deps.ts";
import { ruby } from "./ruby.ts";

Deno.test("ruby tag element", async (t) => {
  await t.step("ruby without attributes", async () => {
    const actual = ruby("Content");

    const expected = `<ruby>Content</ruby>`;

    const rendered = minify(await renderToString(actual));
    assertEquals(rendered, expected);
  });

  await t.step("ruby with attributes", async () => {
    const actual = ruby(
      "Content",
      {},
    );

    const expected = `<ruby>Content</ruby>`;
    const rendered = minify(await renderToString(actual));
    assertEquals(rendered, expected);
  });
});
