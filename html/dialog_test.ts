import { assertEquals } from "asserts";
import { renderToString } from "../deps.ts";
import { dialog } from "./dialog.ts";

Deno.test("dialog tag element", async (t) => {
  await t.step("dialog without attributes", async () => {
    const actual = dialog("Content");
    
    const expected = `<dialog>Content</dialog>`;

    const rendered = await renderToString(actual, { minify: true });
    assertEquals(rendered, expected);
  });

  await t.step("dialog with attributes", async () => {

    const actual = dialog(
    "Content",
      {
        attributes: {},
      },
    );

    
    const expected = `<dialog>Content</dialog>`;
    const rendered = await renderToString(actual, { minify: true });
    assertEquals(rendered, expected);
  });
});
  