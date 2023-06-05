import { assertEquals } from "asserts";
import { renderToString } from "../deps.ts";
import { var } from "./var.ts";

Deno.test("var tag element", async (t) => {
  await t.step("var without attributes", async () => {
    const actual = var("Content");
    
    const expected = `<var>Content</var>`;

    const rendered = await renderToString(actual, { minify: true });
    assertEquals(rendered, expected);
  });

  await t.step("var with attributes", async () => {

    const actual = var(
    "Content",
      {
        attributes: {},
      },
    );

    
    const expected = `<var>Content</var>`;
    const rendered = await renderToString(actual, { minify: true });
    assertEquals(rendered, expected);
  });
});
  