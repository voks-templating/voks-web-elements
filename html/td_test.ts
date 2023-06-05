import { assertEquals } from "asserts";
import { renderToString } from "../deps.ts";
import { td } from "./td.ts";

Deno.test("td tag element", async (t) => {
  await t.step("td without attributes", async () => {
    const actual = td("Content");
    
    const expected = `<td>Content</td>`;

    const rendered = await renderToString(actual, { minify: true });
    assertEquals(rendered, expected);
  });

  await t.step("td with attributes", async () => {

    const actual = td(
    "Content",
      {
        attributes: {},
      },
    );

    
    const expected = `<td>Content</td>`;
    const rendered = await renderToString(actual, { minify: true });
    assertEquals(rendered, expected);
  });
});
  