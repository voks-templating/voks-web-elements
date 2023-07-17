import { assertEquals } from "asserts";
import { minify, renderToString } from "../deps.ts";
import { canvas } from "./canvas.ts";

Deno.test("canvas tag element", async (t) => {
  await t.step("canvas without attributes", async () => {
    const actual = canvas("Content");

    const expected = `<canvas>Content</canvas>`;

    const rendered = minify(await renderToString(actual));
    assertEquals(rendered, expected);
  });

  await t.step("canvas with attributes", async () => {
    const actual = canvas(
      {
        height: 100,
        width: 100,
      },
      "Content",
    );

    const expected = `<canvas height="100" width="100">Content</canvas>`;
    const rendered = minify(await renderToString(actual));
    assertEquals(rendered, expected);
  });
});
