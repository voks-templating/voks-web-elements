import { assertEquals } from "asserts";
import { renderToString } from "../deps.ts";
import { em } from "./em.ts";

Deno.test("em tag element", async (t) => {
  await t.step("em without attributes", async () => {
    const actual = em("Content");

    const expected = `<em>Content</em>`;

    const rendered = await renderToString(actual, { minify: true });
    assertEquals(rendered, expected);
  });

  await t.step("em with attributes", async () => {
    const actual = em(
      "Content",
      {
        attributes: {},
      },
    );

    const expected = `<em>Content</em>`;
    const rendered = await renderToString(actual, { minify: true });
    assertEquals(rendered, expected);
  });
});
