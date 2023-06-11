import { assertEquals } from "asserts";
import { renderToString } from "../deps.ts";
import { nav } from "./nav.ts";

Deno.test("nav tag element", async (t) => {
  await t.step("nav without attributes", async () => {
    const actual = nav("Content");

    const expected = `<nav>Content</nav>`;

    const rendered = await renderToString(actual, { minify: true });
    assertEquals(rendered, expected);
  });

  await t.step("nav with attributes", async () => {
    const actual = nav(
      "Content",
      {},
    );

    const expected = `<nav>Content</nav>`;
    const rendered = await renderToString(actual, { minify: true });
    assertEquals(rendered, expected);
  });
});
