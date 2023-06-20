import { assertEquals } from "asserts";
import { minify, renderToString } from "../deps.ts";
import { span } from "./span.ts";

Deno.test("span tag element", async (t) => {
  await t.step("span without attributes", async () => {
    const actual = span("Content");

    const expected = `<span>Content</span>`;

    const rendered = minify(await renderToString(actual));
    assertEquals(rendered, expected);
  });

  await t.step("span with attributes", async () => {
    const actual = span(
      "Content",
      {},
    );

    const expected = `<span>Content</span>`;
    const rendered = minify(await renderToString(actual));
    assertEquals(rendered, expected);
  });
});
