import { assertEquals } from "asserts";
import { renderToString } from "../deps.ts";
import { h5 } from "./h5.ts";

Deno.test("h5 tag element", async (t) => {
  await t.step("h5 without attributes", async () => {
    const actual = h5("Content");

    const expected = `<h5>Content</h5>`;

    const rendered = await renderToString(actual, { minify: true });
    assertEquals(rendered, expected);
  });

  await t.step("h5 with attributes", async () => {
    const actual = h5(
      "Content",
      {
        attributes: {},
      },
    );

    const expected = `<h5>Content</h5>`;
    const rendered = await renderToString(actual, { minify: true });
    assertEquals(rendered, expected);
  });
});
