import { assertEquals } from "asserts";
import { renderToString, minify } from "../deps.ts";
import { label } from "./label.ts";

Deno.test("label tag element", async (t) => {
  await t.step("label without attributes", async () => {
    const actual = label("Content");

    const expected = `<label>Content</label>`;

    const rendered = minify(await renderToString(actual));
    assertEquals(rendered, expected);
  });

  await t.step("label with attributes", async () => {
    const actual = label(
      "Content",
      {
        for: "#id",
      },
    );

    const expected = `<label for="#id">Content</label>`;
    const rendered = minify(await renderToString(actual));
    assertEquals(rendered, expected);
  });
});
