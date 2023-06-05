import { assertEquals } from "asserts";
import { renderToString } from "../deps.ts";
import { meter } from "./meter.ts";

Deno.test("meter tag element", async (t) => {
  await t.step("meter without attributes", async () => {
    const actual = meter("Content");
    
    const expected = `<meter>Content</meter>`;

    const rendered = await renderToString(actual, { minify: true });
    assertEquals(rendered, expected);
  });

  await t.step("meter with attributes", async () => {

    const actual = meter(
    "Content",
      {
        attributes: {},
      },
    );

    
    const expected = `<meter>Content</meter>`;
    const rendered = await renderToString(actual, { minify: true });
    assertEquals(rendered, expected);
  });
});
  