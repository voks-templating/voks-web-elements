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
        attributes: {},
      },
    );

    const expected = `<fieldset>Content</fieldset>`;
    const rendered = await renderToString(actual, { minify: true });
    assertEquals(rendered, expected);
  });
});
