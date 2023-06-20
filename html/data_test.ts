import { assertEquals } from "asserts";
import { renderToString, minify } from "../deps.ts";
import { data } from "./data.ts";

Deno.test("data tag element", async (t) => {
  await t.step("data with content attributes", async () => {
    const actual = data(
      "Content",
      {
        value: 2,
      },
    );

    const expected = `<data value="2">Content</data>`;
    const rendered = minify(await renderToString(actual));
    assertEquals(rendered, expected);
  });

  await t.step("data without content, just with attributes", async () => {
    const actual = data(
      {
        value: 2,
      },
    );

    const expected = `<data value="2">`;
    const rendered = minify(await renderToString(actual));
    assertEquals(rendered, expected);
  });
});
