import { assertEquals } from "asserts";
import { minify, renderToString } from "../deps.ts";
import { tfoot } from "./tfoot.ts";

Deno.test("tfoot tag element", async (t) => {
  await t.step("tfoot without attributes", async () => {
    const actual = tfoot("Content");

    const expected = `<tfoot>Content</tfoot>`;

    const rendered = minify(await renderToString(actual));
    assertEquals(rendered, expected);
  });

  await t.step("tfoot with attributes", async () => {
    const actual = tfoot(
      "Content",
    );

    const expected = `<tfoot>Content</tfoot>`;
    const rendered = minify(await renderToString(actual));
    assertEquals(rendered, expected);
  });
});
