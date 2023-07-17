import { assertEquals } from "asserts";
import { minify, renderToString } from "../deps.ts";
import { dfn } from "./dfn.ts";

Deno.test("dfn tag element", async (t) => {
  await t.step("dfn without attributes", async () => {
    const actual = dfn("Content");

    const expected = `<dfn>Content</dfn>`;

    const rendered = minify(await renderToString(actual));
    assertEquals(rendered, expected);
  });

  await t.step("dfn with attributes", async () => {
    const actual = dfn(
      "Content",
    );

    const expected = `<dfn>Content</dfn>`;
    const rendered = minify(await renderToString(actual));
    assertEquals(rendered, expected);
  });
});
