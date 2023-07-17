import { assertEquals } from "asserts";
import { minify, renderToString } from "../deps.ts";
import { figcaption } from "./figcaption.ts";

Deno.test("figcaption tag element", async (t) => {
  await t.step("figcaption without attributes", async () => {
    const actual = figcaption("Content");

    const expected = `<figcaption>Content</figcaption>`;

    const rendered = minify(await renderToString(actual));
    assertEquals(rendered, expected);
  });

  await t.step("figcaption with attributes", async () => {
    const actual = figcaption(
      "Content",
    );

    const expected = `<figcaption>Content</figcaption>`;
    const rendered = minify(await renderToString(actual));
    assertEquals(rendered, expected);
  });
});
