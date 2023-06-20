import { assertEquals } from "asserts";
import { renderToString, minify } from "../deps.ts";
import { kbd } from "./kbd.ts";

Deno.test("kbd tag element", async (t) => {
  await t.step("kbd without attributes", async () => {
    const actual = kbd("Content");

    const expected = `<kbd>Content</kbd>`;

    const rendered = minify(await renderToString(actual));
    assertEquals(rendered, expected);
  });

  await t.step("kbd with attributes", async () => {
    const actual = kbd(
      "Content",
      {},
    );

    const expected = `<kbd>Content</kbd>`;
    const rendered = minify(await renderToString(actual));
    assertEquals(rendered, expected);
  });
});
