import { assertEquals } from "asserts";
import { renderToString, minify } from "../deps.ts";
import { col } from "./col.ts";

Deno.test("col tag element", async (t) => {
  await t.step("col without attributes", async () => {
    const actual = col("Content");

    const expected = `<col>Content</col>`;

    const rendered = minify(await renderToString(actual));
    assertEquals(rendered, expected);
  });

  await t.step("col with attributes", async () => {
    const actual = col(
      "Content",
      {
        span: 2,
      },
    );

    const expected = `<col span="2">Content</col>`;
    const rendered = minify(await renderToString(actual));
    assertEquals(rendered, expected);
  });
});
