import { assertEquals } from "asserts";
import { renderToString } from "../deps.ts";
import { link } from "./link.ts";

Deno.test("link tag element", async (t) => {
  await t.step("link without attributes", async () => {
    const actual = link("Content");
    
    const expected = `<link>Content</link>`;

    const rendered = await renderToString(actual, { minify: true });
    assertEquals(rendered, expected);
  });

  await t.step("link with attributes", async () => {

    const actual = link(
    "Content",
      {
        attributes: {},
      },
    );

    
    const expected = `<link>Content</link>`;
    const rendered = await renderToString(actual, { minify: true });
    assertEquals(rendered, expected);
  });
});
  