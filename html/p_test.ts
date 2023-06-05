import { assertEquals } from "asserts";
import { renderToString } from "../deps.ts";
import { p } from "./p.ts";

Deno.test("p tag element", async (t) => {
  await t.step("p without attributes", async () => {
    const actual = p("Content");

    const expected = `<p>Content</p>`;

    const rendered = await renderToString(actual, { minify: true });
    assertEquals(rendered, expected);
  });

  await t.step("p with attributes", async () => {
    const actual = p(
      "Content",
      {
        attributes: {},
      },
    );

    const expected = `<p>Content</p>`;
    const rendered = await renderToString(actual, { minify: true });
    assertEquals(rendered, expected);
  });
});
