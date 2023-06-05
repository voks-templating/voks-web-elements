import { assertEquals } from "asserts";
import { renderToString } from "../deps.ts";
import { li } from "./li.ts";

Deno.test("li tag element", async (t) => {
  await t.step("li without attributes", async () => {
    const actual = li("Content");
    
    const expected = `<li>Content</li>`;

    const rendered = await renderToString(actual, { minify: true });
    assertEquals(rendered, expected);
  });

  await t.step("li with attributes", async () => {

    const actual = li(
    "Content",
      {
        attributes: {},
      },
    );

    
    const expected = `<li>Content</li>`;
    const rendered = await renderToString(actual, { minify: true });
    assertEquals(rendered, expected);
  });
});
  