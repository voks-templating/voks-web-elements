import { assertEquals } from "asserts";
import { renderToString } from "../deps.ts";
import { span } from "./span.ts";

Deno.test("span tag element", async (t) => {
  await t.step("span without attributes", async () => {
    const actual = span("Content");

    const expected = `<span>Content</span>`;

    const rendered = await renderToString(actual, { minify: true });
    assertEquals(rendered, expected);
  });

  await t.step("span with attributes", async () => {
    const actual = span(
      "Content",
      {},
    );

    const expected = `<span>Content</span>`;
    const rendered = await renderToString(actual, { minify: true });
    assertEquals(rendered, expected);
  });
});
