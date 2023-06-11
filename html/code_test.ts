import { assertEquals } from "asserts";
import { renderToString } from "../deps.ts";
import { code } from "./code.ts";

Deno.test("code tag element", async (t) => {
  await t.step("code without attributes", async () => {
    const actual = code("Content");

    const expected = `<code>Content</code>`;

    const rendered = await renderToString(actual, { minify: true });
    assertEquals(rendered, expected);
  });

  await t.step("code with attributes", async () => {
    const actual = code(
      "Content",
      {},
    );

    const expected = `<code>Content</code>`;
    const rendered = await renderToString(actual, { minify: true });
    assertEquals(rendered, expected);
  });
});
