import { assertEquals } from "asserts";
import { renderToString } from "../deps.ts";
import { strong } from "./strong.ts";

Deno.test("strong tag element", async (t) => {
  await t.step("strong without attributes", async () => {
    const actual = strong("Content");
    
    const expected = `<strong>Content</strong>`;

    const rendered = await renderToString(actual, { minify: true });
    assertEquals(rendered, expected);
  });

  await t.step("strong with attributes", async () => {

    const actual = strong(
    "Content",
      {
        attributes: {},
      },
    );

    
    const expected = `<strong>Content</strong>`;
    const rendered = await renderToString(actual, { minify: true });
    assertEquals(rendered, expected);
  });
});
  