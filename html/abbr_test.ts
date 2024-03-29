import { assertEquals } from "asserts";
import { minify, renderToString } from "../deps.ts";
import { abbr } from "./abbr.ts";

Deno.test("abbr tag element", async (t) => {
  await t.step("abbr with attributes", async () => {
    const actual = abbr(
      {
        title: "HyperText Markup Language",
      },
      "HTML",
    );

    const expected = `<abbr title="HyperText Markup Language">HTML</abbr>`;
    const rendered = minify(await renderToString(actual));
    assertEquals(rendered, expected);
  });
});
