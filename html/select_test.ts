import { assertEquals } from "asserts";
import { minify, renderToString } from "../deps.ts";
import { select } from "./select.ts";

Deno.test("select tag element", async (t) => {
  await t.step("select without attributes", async () => {
    const actual = select("Content");

    const expected = `<select>Content</select>`;

    const rendered = minify(await renderToString(actual));
    assertEquals(rendered, expected);
  });

  await t.step("select with attributes", async () => {
    const actual = select(
      {
        autocomplete: "on",
        autofocus: true,
        disabled: true,
        form: "form",
        multiple: true,
        name: "name",
        required: true,
        size: 1,
      },
      "Content",
    );

    const expected =
      `<select autocomplete="on" autofocus disabled form="form" multiple name="name" required size="1">Content</select>`;
    const rendered = minify(await renderToString(actual));
    assertEquals(rendered, expected);
  });
});
