import { assertEquals } from "asserts";
import { renderToString } from "../deps.ts";
import { object } from "./object.ts";

Deno.test("object tag element", async (t) => {
  await t.step("object without attributes", async () => {
    const actual = object("Content");
    
    const expected = `<object>Content</object>`;

    const rendered = await renderToString(actual, { minify: true });
    assertEquals(rendered, expected);
  });

  await t.step("object with attributes", async () => {

    const actual = object(
    "Content",
      {
        attributes: {},
      },
    );

    
    const expected = `<object>Content</object>`;
    const rendered = await renderToString(actual, { minify: true });
    assertEquals(rendered, expected);
  });
});
  