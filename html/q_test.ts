import { assertEquals } from "asserts";
import { renderToString, minify } from "../deps.ts";
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
      "Content",
      {
        cite: "cite",
      },
    );

    const expected = `<q cite="cite">Content</q>`;
    const rendered = minify(await renderToString(actual));
    assertEquals(rendered, expected);
  });
});
