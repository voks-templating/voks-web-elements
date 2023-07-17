import { assertEquals } from "asserts";
import { minify, renderToString } from "../deps.ts";
import { b } from "./b.ts";

Deno.test("b tag element", async (t) => {
  await t.step("b with attributes", async () => {
    const actual = b(
      "Content",
    );

    const expected = `<b>Content</b>`;
    const rendered = minify(await renderToString(actual));
    assertEquals(rendered, expected);
  });
});
