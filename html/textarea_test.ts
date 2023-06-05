import { assertEquals } from "asserts";
import { renderToString } from "../deps.ts";
import { textarea } from "./textarea.ts";

Deno.test("textarea tag element", async (t) => {
  await t.step("textarea without attributes", async () => {
    const actual = textarea("Content");
    
    const expected = `<textarea>Content</textarea>`;

    const rendered = await renderToString(actual, { minify: true });
    assertEquals(rendered, expected);
  });

  await t.step("textarea with attributes", async () => {

    const actual = textarea(
    "Content",
      {
        attributes: {},
      },
    );

    
    const expected = `<textarea>Content</textarea>`;
    const rendered = await renderToString(actual, { minify: true });
    assertEquals(rendered, expected);
  });
});
  