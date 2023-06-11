import { assertEquals } from "asserts";
import { renderToString } from "../deps.ts";
import { div } from "./div.ts";

Deno.test("div tag element", async (t) => {
  await t.step("div without attributes", async () => {
    const actual = div("Content");

    const expected = `<div>Content</div>`;

    const rendered = await renderToString(actual, { minify: true });
    assertEquals(rendered, expected);
  });

  await t.step("div with attributes", async () => {
    const actual = div(
      "Content",
      {},
    );

    const expected = `<div>Content</div>`;
    const rendered = await renderToString(actual, { minify: true });
    assertEquals(rendered, expected);
  });
});
