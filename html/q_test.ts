import { assertEquals } from "asserts";
import { renderToString } from "../deps.ts";
import { q } from "./q.ts";

Deno.test("q tag element", async (t) => {
  await t.step("q without attributes", async () => {
    const actual = q("Content");
    
    const expected = `<q>Content</q>`;

    const rendered = await renderToString(actual, { minify: true });
    assertEquals(rendered, expected);
  });

  await t.step("q with attributes", async () => {

    const actual = q(
    "Content",
      {
        attributes: {},
      },
    );

    
    const expected = `<q>Content</q>`;
    const rendered = await renderToString(actual, { minify: true });
    assertEquals(rendered, expected);
  });
});
  