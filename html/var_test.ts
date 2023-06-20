import { assertEquals } from "asserts";
import { minify, renderToString } from "../deps.ts";
import { variable } from "./var.ts";

Deno.test("var tag element", async (t) => {
  await t.step("var without attributes", async () => {
    const actual = variable("Content");

    const expected = `<var>Content</var>`;

    const rendered = minify(await renderToString(actual));
    assertEquals(rendered, expected);
  });

  await t.step("var with attributes", async () => {
    const actual = variable(
      "Content",
      {},
    );

    const expected = `<var>Content</var>`;
    const rendered = minify(await renderToString(actual));
    assertEquals(rendered, expected);
  });
});
