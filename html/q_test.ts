import { assertEquals } from "asserts";
import { minify, renderToString } from "../deps.ts";
import { q } from "./q.ts";

Deno.test("q tag element", async (t) => {
  await t.step("q without attributes", async () => {
    const actual = q("Content");

    const expected = `<q>Content</q>`;

    const rendered = minify(await renderToString(actual));
    assertEquals(rendered, expected);
  });

  await t.step("q with attributes", async () => {
    const actual = q(
      {
        cite: "cite",
      },
      "Content",
    );

    const expected = `<q cite="cite">Content</q>`;
    const rendered = minify(await renderToString(actual));
    assertEquals(rendered, expected);
  });
});
