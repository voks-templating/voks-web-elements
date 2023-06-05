import { assertEquals } from "asserts";
import { renderToString } from "../deps.ts";
import { output } from "./output.ts";

Deno.test("output tag element", async (t) => {
  await t.step("output without attributes", async () => {
    const actual = output("Content");
    
    const expected = `<output>Content</output>`;

    const rendered = await renderToString(actual, { minify: true });
    assertEquals(rendered, expected);
  });

  await t.step("output with attributes", async () => {

    const actual = output(
    "Content",
      {
        attributes: {},
      },
    );

    
    const expected = `<output>Content</output>`;
    const rendered = await renderToString(actual, { minify: true });
    assertEquals(rendered, expected);
  });
});
  