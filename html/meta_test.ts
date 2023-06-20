import { assertEquals } from "asserts";
import { minify, renderToString } from "../deps.ts";
import { meta } from "./meta.ts";

Deno.test("meta tag element", async (t) => {
  await t.step("meta without attributes", async () => {
    const actual = meta();

    const expected = `<meta />`;

    const rendered = minify(await renderToString(actual));
    assertEquals(rendered, expected);
  });

  await t.step("meta with attributes", async () => {
    const actual = meta(
      {
        charset: "utf-8",
        content: "text/html",
        httpEquiv: "Content-Type",
        name: "viewport",
      },
    );

    const expected =
      `<meta charset="utf-8" content="text/html" http-equiv="Content-Type" name="viewport" />`;
    const rendered = minify(await renderToString(actual));
    assertEquals(rendered, expected);
  });
});
