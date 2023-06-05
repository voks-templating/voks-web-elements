import { assertEquals } from "asserts";
import { renderToString } from "../deps.ts";
import { wbr } from "./wbr.ts";

Deno.test("wbr tag element", async (t) => {
  await t.step("wbr without attributes", async () => {
    const actual = wbr("Content");

    const expected = `<wbr>Content</wbr>`;

    const rendered = await renderToString(actual, { minify: true });
    assertEquals(rendered, expected);
  });

  await t.step("wbr with attributes", async () => {
    const actual = wbr(
      "Content",
      {
        attributes: {},
      },
    );

    const expected = `<wbr>Content</wbr>`;
    const rendered = await renderToString(actual, { minify: true });
    assertEquals(rendered, expected);
  });
});
