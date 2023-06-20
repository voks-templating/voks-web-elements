import { assertEquals } from "asserts";
import { renderToString, minify } from "../deps.ts";
import { progress } from "./progress.ts";

Deno.test("progress tag element", async (t) => {
  await t.step("progress without attributes", async () => {
    const actual = progress("Content");

    const expected = `<progress>Content</progress>`;

    const rendered = minify(await renderToString(actual));
    assertEquals(rendered, expected);
  });

  await t.step("progress with attributes", async () => {
    const actual = progress(
      "Content",
      {
        max: 100,
        value: 50,
      },
    );

    const expected = `<progress max="100" value="50">Content</progress>`;
    const rendered = minify(await renderToString(actual));
    assertEquals(rendered, expected);
  });
});
