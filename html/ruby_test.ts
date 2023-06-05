import { assertEquals } from "asserts";
import { renderToString } from "../deps.ts";
import { ruby } from "./ruby.ts";

Deno.test("ruby tag element", async (t) => {
  await t.step("ruby without attributes", async () => {
    const actual = ruby("Content");
    
    const expected = `<ruby>Content</ruby>`;

    const rendered = await renderToString(actual, { minify: true });
    assertEquals(rendered, expected);
  });

  await t.step("ruby with attributes", async () => {

    const actual = ruby(
    "Content",
      {
        attributes: {},
      },
    );

    
    const expected = `<ruby>Content</ruby>`;
    const rendered = await renderToString(actual, { minify: true });
    assertEquals(rendered, expected);
  });
});
  