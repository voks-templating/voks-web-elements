import { assertEquals } from "asserts";
import { renderToString } from "../deps.ts";
import { header } from "./header.ts";

Deno.test("header tag element", async (t) => {
  await t.step("header without attributes", async () => {
    const actual = header("Content");
    
    const expected = `<header>Content</header>`;

    const rendered = await renderToString(actual, { minify: true });
    assertEquals(rendered, expected);
  });

  await t.step("header with attributes", async () => {

    const actual = header(
    "Content",
      {
        attributes: {},
      },
    );

    
    const expected = `<header>Content</header>`;
    const rendered = await renderToString(actual, { minify: true });
    assertEquals(rendered, expected);
  });
});
  