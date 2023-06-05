import { assertEquals } from "asserts";
import { renderToString } from "../deps.ts";
import { map } from "./map.ts";

Deno.test("map tag element", async (t) => {
  await t.step("map without attributes", async () => {
    const actual = map("Content");

    const expected = `<map>Content</map>`;

    const rendered = await renderToString(actual, { minify: true });
    assertEquals(rendered, expected);
  });

  await t.step("map with attributes", async () => {
    const actual = map(
      "Content",
      {
        attributes: {},
      },
    );

    const expected = `<map>Content</map>`;
    const rendered = await renderToString(actual, { minify: true });
    assertEquals(rendered, expected);
  });
});
