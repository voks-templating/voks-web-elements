import { assertEquals } from "asserts";
import { renderToString } from "../deps.ts";
import { fieldset } from "./fieldset.ts";

Deno.test("fieldset tag element", async (t) => {
  await t.step("fieldset without attributes", async () => {
    const actual = fieldset("Content");

    const expected = `<fieldset>Content</fieldset>`;

    const rendered = await renderToString(actual, { minify: true });
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
    const rendered = await renderToString(actual, { minify: true });
    assertEquals(rendered, expected);
  });
});
