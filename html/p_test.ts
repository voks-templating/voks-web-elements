import { assertEquals } from "asserts";
import { renderToString, minify } from "../deps.ts";
import { p } from "./p.ts";

Deno.test("p tag element", async (t) => {
  await t.step("p without attributes", async () => {
    const actual = p("Content");

    const expected = `<p>Content</p>`;

    const rendered = minify(await renderToString(actual));
    assertEquals(rendered, expected);
  });

  await t.step("p with attributes", async () => {
    const actual = p(
      "Content",
      {},
    );

    const expected = `<p>Content</p>`;
    const rendered = minify(await renderToString(actual));
    assertEquals(rendered, expected);
  });
});
