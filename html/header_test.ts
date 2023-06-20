import { assertEquals } from "asserts";
import { renderToString, minify } from "../deps.ts";
import { header } from "./header.ts";

Deno.test("header tag element", async (t) => {
  await t.step("header without attributes", async () => {
    const actual = header("Content");

    const expected = `<header>Content</header>`;

    const rendered = minify(await renderToString(actual));
    assertEquals(rendered, expected);
  });

  await t.step("header with attributes", async () => {
    const actual = header(
      "Content",
      {},
    );

    const expected = `<header>Content</header>`;
    const rendered = minify(await renderToString(actual));
    assertEquals(rendered, expected);
  });
});
