import { assertEquals } from "asserts";
import { minify, renderToString } from "../deps.ts";
import { htmlElement } from "./html.ts";

Deno.test("html tag element", async (t) => {
  await t.step("html without attributes", async () => {
    const actual = htmlElement("Content");

    const expected = `<html>Content</html>`;

    const rendered = await renderToString(actual);
    assertEquals(rendered, expected);
  });

  await t.step("html with attributes", async () => {
    const actual = htmlElement(
      {
        xmlns: "http://www.w3.org/1999/xhtml",
      },
      "Content",
    );

    const expected =
      `<html xmlns="http://www.w3.org/1999/xhtml">Content</html>`;
    const rendered = minify(await renderToString(actual));
    assertEquals(rendered, expected);
  });
});
