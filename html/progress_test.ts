import { assertEquals } from "asserts";
import { renderToString } from "../deps.ts";
import { progress } from "./progress.ts";

Deno.test("progress tag element", async (t) => {
  await t.step("progress without attributes", async () => {
    const actual = progress("Content");
    
    const expected = `<progress>Content</progress>`;

    const rendered = await renderToString(actual, { minify: true });
    assertEquals(rendered, expected);
  });

  await t.step("progress with attributes", async () => {

    const actual = progress(
    "Content",
      {
        attributes: {},
      },
    );

    
    const expected = `<progress>Content</progress>`;
    const rendered = await renderToString(actual, { minify: true });
    assertEquals(rendered, expected);
  });
});
  