import { assertEquals } from "asserts";
import { renderToString } from "../deps.ts";
import { embed } from "./embed.ts";

Deno.test("embed tag element", async (t) => {
  await t.step("embed without attributes", async () => {
    const actual = embed("Content");
    
    const expected = `<embed>Content</embed>`;

    const rendered = await renderToString(actual, { minify: true });
    assertEquals(rendered, expected);
  });

  await t.step("embed with attributes", async () => {

    const actual = embed(
    "Content",
      {
        attributes: {},
      },
    );

    
    const expected = `<embed>Content</embed>`;
    const rendered = await renderToString(actual, { minify: true });
    assertEquals(rendered, expected);
  });
});
  