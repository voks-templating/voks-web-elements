import { assertEquals } from "asserts";
import { renderToString, minify } from "../deps.ts";
import { tbody } from "./tbody.ts";

Deno.test("tbody tag element", async (t) => {
  await t.step("tbody without attributes", async () => {
    const actual = tbody("Content");

    const expected = `<tbody>Content</tbody>`;

    const rendered = minify(await renderToString(actual));
    assertEquals(rendered, expected);
  });

  await t.step("tbody with attributes", async () => {
    const actual = tbody(
      "Content",
      {},
    );

    const expected = `<tbody>Content</tbody>`;
    const rendered = minify(await renderToString(actual));
    assertEquals(rendered, expected);
  });
});
