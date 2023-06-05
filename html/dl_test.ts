import { assertEquals } from "asserts";
import { renderToString } from "../deps.ts";
import { dl } from "./dl.ts";

Deno.test("dl tag element", async (t) => {
  await t.step("dl without attributes", async () => {
    const actual = dl("Content");

    const expected = `<dl>Content</dl>`;

    const rendered = await renderToString(actual, { minify: true });
    assertEquals(rendered, expected);
  });

  await t.step("dl with attributes", async () => {
    const actual = dl(
      "Content",
      {
        attributes: {},
      },
    );

    const expected = `<dl>Content</dl>`;
    const rendered = await renderToString(actual, { minify: true });
    assertEquals(rendered, expected);
  });
});
