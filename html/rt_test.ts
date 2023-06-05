import { assertEquals } from "asserts";
import { renderToString } from "../deps.ts";
import { rt } from "./rt.ts";

Deno.test("rt tag element", async (t) => {
  await t.step("rt without attributes", async () => {
    const actual = rt("Content");
    
    const expected = `<rt>Content</rt>`;

    const rendered = await renderToString(actual, { minify: true });
    assertEquals(rendered, expected);
  });

  await t.step("rt with attributes", async () => {

    const actual = rt(
    "Content",
      {
        attributes: {},
      },
    );

    
    const expected = `<rt>Content</rt>`;
    const rendered = await renderToString(actual, { minify: true });
    assertEquals(rendered, expected);
  });
});
  