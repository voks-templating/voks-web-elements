import { assertEquals } from "asserts";
import { renderToString, minify } from "../deps.ts";
import { menu } from "./menu.ts";

Deno.test("menu tag element", async (t) => {
  await t.step("menu without attributes", async () => {
    const actual = menu("Content");

    const expected = `<menu>Content</menu>`;

    const rendered = minify(await renderToString(actual));
    assertEquals(rendered, expected);
  });

  await t.step("menu with attributes", async () => {
    const actual = menu(
      "Content",
      {},
    );

    const expected = `<menu>Content</menu>`;
    const rendered = minify(await renderToString(actual));
    assertEquals(rendered, expected);
  });
});
