import { assertEquals } from "asserts";
import { renderToString } from "../deps.ts";
import { dd } from "./dd.ts";

Deno.test("dd tag element", async (t) => {
  await t.step("dd without attributes", async () => {
    const actual = dd("Content");

    const expected = `<dd>Content</dd>`;

    const rendered = await renderToString(actual, { minify: true });
    assertEquals(rendered, expected);
  });

  await t.step("dd with attributes", async () => {
    const actual = dd(
      "Content",
      {
        attributes: {},
      },
    );

    const expected = `<dd>Content</dd>`;
    const rendered = await renderToString(actual, { minify: true });
    assertEquals(rendered, expected);
  });
});
