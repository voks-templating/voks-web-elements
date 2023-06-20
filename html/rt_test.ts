import { assertEquals } from "asserts";
import { renderToString, minify } from "../deps.ts";
import { rt } from "./rt.ts";

Deno.test("rt tag element", async (t) => {
  await t.step("rt without attributes", async () => {
    const actual = rt("Content");

    const expected = `<rt>Content</rt>`;

    const rendered = minify(await renderToString(actual));
    assertEquals(rendered, expected);
  });

  await t.step("rt with attributes", async () => {
    const actual = rt(
      "Content",
      {},
    );

    const expected = `<rt>Content</rt>`;
    const rendered = minify(await renderToString(actual));
    assertEquals(rendered, expected);
  });
});
