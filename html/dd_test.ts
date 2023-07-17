import { assertEquals } from "asserts";
import { minify, renderToString } from "../deps.ts";
import { dd } from "./dd.ts";

Deno.test("dd tag element", async (t) => {
  await t.step("dd without attributes", async () => {
    const actual = dd("Content");

    const expected = `<dd>Content</dd>`;

    const rendered = minify(await renderToString(actual));
    assertEquals(rendered, expected);
  });

  await t.step("dd with attributes", async () => {
    const actual = dd(
      "Content",
    );

    const expected = `<dd>Content</dd>`;
    const rendered = minify(await renderToString(actual));
    assertEquals(rendered, expected);
  });
});
