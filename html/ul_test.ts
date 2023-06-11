import { assertEquals } from "asserts";
import { renderToString } from "../deps.ts";
import { ul } from "./ul.ts";

Deno.test("ul tag element", async (t) => {
  await t.step("ul without attributes", async () => {
    const actual = ul("Content");

    const expected = `<ul>Content</ul>`;

    const rendered = await renderToString(actual, { minify: true });
    assertEquals(rendered, expected);
  });

  await t.step("ul with attributes", async () => {
    const actual = ul(
      "Content",
      {},
    );

    const expected = `<ul>Content</ul>`;
    const rendered = await renderToString(actual, { minify: true });
    assertEquals(rendered, expected);
  });
});
