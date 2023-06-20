import { assertEquals } from "asserts";
import { minify, renderToString } from "../deps.ts";
import { meter } from "./meter.ts";

Deno.test("meter tag element", async (t) => {
  await t.step("meter without attributes", async () => {
    const actual = meter("Content");

    const expected = `<meter>Content</meter>`;

    const rendered = minify(await renderToString(actual));
    assertEquals(rendered, expected);
  });

  await t.step("meter with attributes", async () => {
    const actual = meter(
      "Content",
      {
        value: 2,
        min: 1,
        max: 3,
        low: 1.5,
        high: 2.5,
        optimum: 2,
      },
    );

    const expected =
      `<meter high="2.5" low="1.5" max="3" min="1" optimum="2" value="2">Content</meter>`;
    const rendered = minify(await renderToString(actual));
    assertEquals(rendered, expected);
  });
});
