import { assertEquals } from "asserts";
import { renderToString } from "../deps.ts";
import { menu } from "./menu.ts";

Deno.test("menu tag element", async (t) => {
  await t.step("menu without attributes", async () => {
    const actual = menu("Content");
    
    const expected = `<menu>Content</menu>`;

    const rendered = await renderToString(actual, { minify: true });
    assertEquals(rendered, expected);
  });

  await t.step("menu with attributes", async () => {

    const actual = menu(
    "Content",
      {
        attributes: {},
      },
    );

    
    const expected = `<menu>Content</menu>`;
    const rendered = await renderToString(actual, { minify: true });
    assertEquals(rendered, expected);
  });
});
  