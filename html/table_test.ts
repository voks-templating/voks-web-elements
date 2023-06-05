import { assertEquals } from "asserts";
import { renderToString } from "../deps.ts";
import { table } from "./table.ts";

Deno.test("table tag element", async (t) => {
  await t.step("table without attributes", async () => {
    const actual = table("Content");

    const expected = `<table>Content</table>`;

    const rendered = await renderToString(actual, { minify: true });
    assertEquals(rendered, expected);
  });

  await t.step("table with attributes", async () => {
    const actual = table(
      "Content",
      {
        attributes: {},
      },
    );

    const expected = `<table>Content</table>`;
    const rendered = await renderToString(actual, { minify: true });
    assertEquals(rendered, expected);
  });
});
