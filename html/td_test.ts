import { assertEquals } from "asserts";
import { minify, renderToString } from "../deps.ts";
import { td } from "./td.ts";

Deno.test("td tag element", async (t) => {
  await t.step("td without attributes", async () => {
    const actual = td("Content");

    const expected = `<td>Content</td>`;

    const rendered = minify(await renderToString(actual));
    assertEquals(rendered, expected);
  });

  await t.step("td with attributes", async () => {
    const actual = td(
      "Content",
      {
        colspan: 2,
        rowspan: 2,
        headers: "#foo #bar",
      },
    );

    const expected =
      `<td colspan="2" headers="#foo #bar" rowspan="2">Content</td>`;
    const rendered = minify(await renderToString(actual));
    assertEquals(rendered, expected);
  });
});
