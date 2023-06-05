import { assertEquals } from "asserts";
import { renderToString } from "../deps.ts";
import { small } from "./small.ts";

Deno.test("small tag element", async (t) => {
  await t.step("small without attributes", async () => {
    const actual = small("Content");

    const expected = `<small>Content</small>`;

    const rendered = await renderToString(actual, { minify: true });
    assertEquals(rendered, expected);
  });

  await t.step("small with attributes", async () => {
    const actual = small(
      "Content",
      {
        attributes: {},
      },
    );

    const expected = `<small>Content</small>`;
    const rendered = await renderToString(actual, { minify: true });
    assertEquals(rendered, expected);
  });
});
