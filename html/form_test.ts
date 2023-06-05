import { assertEquals } from "asserts";
import { renderToString } from "../deps.ts";
import { form } from "./form.ts";

Deno.test("form tag element", async (t) => {
  await t.step("form without attributes", async () => {
    const actual = form("Content");

    const expected = `<form>Content</form>`;

    const rendered = await renderToString(actual, { minify: true });
    assertEquals(rendered, expected);
  });

  await t.step("form with attributes", async () => {
    const actual = form(
      "Content",
      {
        attributes: {},
      },
    );

    const expected = `<form>Content</form>`;
    const rendered = await renderToString(actual, { minify: true });
    assertEquals(rendered, expected);
  });
});
