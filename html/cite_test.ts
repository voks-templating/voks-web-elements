import { assertEquals } from "asserts";
import { minify, renderToString } from "../deps.ts";
import { cite } from "./cite.ts";

Deno.test("cite tag element", async (t) => {
  await t.step("cite without attributes", async () => {
    const actual = cite("Content");

    const expected = `<cite>Content</cite>`;

    const rendered = minify(await renderToString(actual));
    assertEquals(rendered, expected);
  });

  await t.step("cite with attributes", async () => {
    const actual = cite(
      {},
      "Content",
    );

    const expected = `<cite>Content</cite>`;
    const rendered = minify(await renderToString(actual));
    assertEquals(rendered, expected);
  });
});
