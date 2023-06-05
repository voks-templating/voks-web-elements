import { assertEquals } from "asserts";
import { renderToString } from "../deps.ts";
import { h3 } from "./h3.ts";

Deno.test("h3 tag element", async (t) => {
  await t.step("h3 without attributes", async () => {
    const actual = h3("Content");
    
    const expected = `<h3>Content</h3>`;

    const rendered = await renderToString(actual, { minify: true });
    assertEquals(rendered, expected);
  });

  await t.step("h3 with attributes", async () => {

    const actual = h3(
    "Content",
      {
        attributes: {},
      },
    );

    
    const expected = `<h3>Content</h3>`;
    const rendered = await renderToString(actual, { minify: true });
    assertEquals(rendered, expected);
  });
});
  