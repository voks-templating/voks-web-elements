import { assertEquals } from "asserts";
import { minify, renderToString } from "../deps.ts";
import { map } from "./map.ts";

Deno.test("map tag element", async (t) => {
  await t.step("map without attributes", async () => {
    const actual = map("Content");

    const expected = `<map>Content</map>`;

    const rendered = minify(await renderToString(actual));
    assertEquals(rendered, expected);
  });

  await t.step("map with attributes", async () => {
    const actual = map(
      {
        name: "map",
      },
      "Content",
    );

    const expected = `<map name="map">Content</map>`;
    const rendered = minify(await renderToString(actual));
    assertEquals(rendered, expected);
  });
});
