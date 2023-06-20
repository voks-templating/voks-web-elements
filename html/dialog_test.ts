import { assertEquals } from "asserts";
import { renderToString, minify } from "../deps.ts";
import { dialog } from "./dialog.ts";

Deno.test("dialog tag element", async (t) => {
  await t.step("dialog without attributes", async () => {
    const actual = dialog("Content");

    const expected = `<dialog>Content</dialog>`;

    const rendered = minify(await renderToString(actual));
    assertEquals(rendered, expected);
  });

  await t.step("dialog with attributes", async () => {
    const actual = dialog(
      "Content",
      {
        open: true,
      },
    );

    const expected = `<dialog open>Content</dialog>`;
    const rendered = minify(await renderToString(actual));
    assertEquals(rendered, expected);
  });
});
