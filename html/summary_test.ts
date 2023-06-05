import { assertEquals } from "asserts";
import { renderToString } from "../deps.ts";
import { summary } from "./summary.ts";

Deno.test("summary tag element", async (t) => {
  await t.step("summary without attributes", async () => {
    const actual = summary("Content");
    
    const expected = `<summary>Content</summary>`;

    const rendered = await renderToString(actual, { minify: true });
    assertEquals(rendered, expected);
  });

  await t.step("summary with attributes", async () => {

    const actual = summary(
    "Content",
      {
        attributes: {},
      },
    );

    
    const expected = `<summary>Content</summary>`;
    const rendered = await renderToString(actual, { minify: true });
    assertEquals(rendered, expected);
  });
});
  