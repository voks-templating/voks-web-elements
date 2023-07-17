import { assertEquals } from "asserts";
import { minify, renderToString } from "../deps.ts";
import { em } from "./em.ts";

Deno.test("em tag element", async (t) => {
  await t.step("em without attributes", async () => {
    const actual = em("Content");

    const expected = `<em>Content</em>`;

    const rendered = minify(await renderToString(actual));
    assertEquals(rendered, expected);
  });

  await t.step("em with attributes", async () => {
    const actual = em(
      "Content",
    );

    const expected = `<em>Content</em>`;
    const rendered = minify(await renderToString(actual));
    assertEquals(rendered, expected);
  });
});
