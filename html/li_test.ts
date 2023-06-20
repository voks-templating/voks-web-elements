import { assertEquals } from "asserts";
import { minify, renderToString } from "../deps.ts";
import { li } from "./li.ts";

Deno.test("li tag element", async (t) => {
  await t.step("li without attributes", async () => {
    const actual = li("Content");

    const expected = `<li>Content</li>`;

    const rendered = minify(await renderToString(actual));
    assertEquals(rendered, expected);
  });

  await t.step("li with attributes", async () => {
    const actual = li(
      "Content",
      {
        value: 1,
      },
    );

    const expected = `<li value="1">Content</li>`;
    const rendered = minify(await renderToString(actual));
    assertEquals(rendered, expected);
  });
});
