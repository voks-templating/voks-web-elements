import { assertEquals } from "asserts";
import { renderToString, minify } from "../deps.ts";
import { s } from "./s.ts";

Deno.test("s tag element", async (t) => {
  await t.step("s without attributes", async () => {
    const actual = s("Content");

    const expected = `<s>Content</s>`;

    const rendered = minify(await renderToString(actual));
    assertEquals(rendered, expected);
  });

  await t.step("s with attributes", async () => {
    const actual = s(
      "Content",
      {},
    );

    const expected = `<s>Content</s>`;
    const rendered = minify(await renderToString(actual));
    assertEquals(rendered, expected);
  });
});
