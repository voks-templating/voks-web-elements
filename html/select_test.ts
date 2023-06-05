import { assertEquals } from "asserts";
import { renderToString } from "../deps.ts";
import { select } from "./select.ts";

Deno.test("select tag element", async (t) => {
  await t.step("select without attributes", async () => {
    const actual = select("Content");
    
    const expected = `<select>Content</select>`;

    const rendered = await renderToString(actual, { minify: true });
    assertEquals(rendered, expected);
  });

  await t.step("select with attributes", async () => {

    const actual = select(
    "Content",
      {
        attributes: {},
      },
    );

    
    const expected = `<select>Content</select>`;
    const rendered = await renderToString(actual, { minify: true });
    assertEquals(rendered, expected);
  });
});
  