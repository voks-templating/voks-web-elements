import { assertEquals } from "asserts";
import { renderToString } from "../deps.ts";
import { style } from "./style.ts";

Deno.test("style tag element", async (t) => {
  await t.step("style without attributes", async () => {
    const actual = style("Content");
    
    const expected = `<style>Content</style>`;

    const rendered = await renderToString(actual, { minify: true });
    assertEquals(rendered, expected);
  });

  await t.step("style with attributes", async () => {

    const actual = style(
    "Content",
      {
        attributes: {},
      },
    );

    
    const expected = `<style>Content</style>`;
    const rendered = await renderToString(actual, { minify: true });
    assertEquals(rendered, expected);
  });
});
  