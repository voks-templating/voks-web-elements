import { assertEquals } from "asserts";
import { renderToString } from "../deps.ts";
import { col } from "./col.ts";

Deno.test("col tag element", async (t) => {
  await t.step("col without attributes", async () => {
    const actual = col("Content");

    const expected = `<col>Content</col>`;

    const rendered = await renderToString(actual, { minify: true });
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
    const rendered = await renderToString(actual, { minify: true });
    assertEquals(rendered, expected);
  });
});
