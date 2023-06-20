import { assertEquals } from "asserts";
import { renderToString, minify } from "../deps.ts";
import { textarea } from "./textarea.ts";

Deno.test("textarea tag element", async (t) => {
  await t.step("textarea without attributes", async () => {
    const actual = textarea("Content");

    const expected = `<textarea>Content</textarea>`;

    const rendered = minify(await renderToString(actual));
    assertEquals(rendered, expected);
  });

  await t.step("textarea with attributes", async () => {
    const actual = textarea(
      "Content",
      {
        autocomplete: "test",
        autofocus: true,
        cols: 100,
        disabled: true,
        form: "test",
        maxlength: 100,
        minlength: 100,
        name: "test",
        placeholder: "test",
      },
    );

    const expected =
      `<textarea autocomplete="test" autofocus cols="100" disabled form="test" maxlength="100" minlength="100" name="test" placeholder="test">Content</textarea>`;
    const rendered = minify(await renderToString(actual));
    assertEquals(rendered, expected);
  });
});
