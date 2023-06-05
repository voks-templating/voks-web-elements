import { assertEquals } from "asserts";
import { renderToString } from "../deps.ts";
import { blockquote } from "./blockquote.ts";

Deno.test("blockquote tag element", async (t) => {
  await t.step("blockquote with attributes", async () => {
    const actual = blockquote(
      "Content",
      {
        attributes: {
          cite:
            "https://developer.mozilla.org/en-US/docs/Web/HTML/Element/blockquote",
        },
      },
    );

    const expected =
      `<blockquote cite="https://developer.mozilla.org/en-US/docs/Web/HTML/Element/blockquote">Content</blockquote>`;
    const rendered = await renderToString(actual, { minify: true });
    assertEquals(rendered, expected);
  });
});
