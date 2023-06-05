import { assertEquals } from "asserts";
import { renderToString } from "../deps.ts";
import { meta } from "./meta.ts";

Deno.test("meta tag element", async (t) => {
  await t.step("meta without attributes", async () => {
    const actual = meta("Content");

    const expected = `<meta>Content</meta>`;

    const rendered = await renderToString(actual, { minify: true });
    assertEquals(rendered, expected);
  });

  await t.step("meta with attributes", async () => {
    const actual = meta(
      "Content",
      {
        attributes: {
          charset: "utf-8",
          content: "text/html",
          httpEquiv: "Content-Type",
          name: "viewport",
        },
      },
    );

    const expected =
      `<meta charset="utf-8" content="text/html" http-equiv="Content-Type" name="viewport">Content</meta>`;
    const rendered = await renderToString(actual, { minify: true });
    assertEquals(rendered, expected);
  });
});
