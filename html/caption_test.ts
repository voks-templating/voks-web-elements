import { assertEquals } from "asserts";
import { minify, renderToString } from "../deps.ts";
import { caption } from "./caption.ts";

Deno.test("caption tag element", async (t) => {
  await t.step("caption without attributes", async () => {
    const actual = caption("Content");

    const expected = `<caption>Content</caption>`;

    const rendered = minify(await renderToString(actual));
    assertEquals(rendered, expected);
  });

  await t.step("caption with attributes", async () => {
    const actual = caption(
      "Content",
    );

    const expected = `<caption>Content</caption>`;
    const rendered = minify(await renderToString(actual));
    assertEquals(rendered, expected);
  });
});
