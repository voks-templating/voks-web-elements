import { assertEquals } from "asserts";
import { renderToString, minify } from "../deps.ts";
import { fieldset } from "./fieldset.ts";

Deno.test("fieldset tag element", async (t) => {
  await t.step("fieldset without attributes", async () => {
    const actual = fieldset("Content");

    const expected = `<fieldset>Content</fieldset>`;

    const rendered = minify(await renderToString(actual));
    assertEquals(rendered, expected);
  });

  await t.step("fieldset with attributes", async () => {
    const actual = fieldset(
      "Content",
      {
        disabled: true,
        form: "form-id",
        name: "name",
      },
    );

    const expected =
      `<fieldset disabled form="form-id" name="name">Content</fieldset>`;
    const rendered = minify(await renderToString(actual));
    assertEquals(rendered, expected);
  });
});
