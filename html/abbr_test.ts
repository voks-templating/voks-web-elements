import { assertEquals, renderToString } from "../deps.ts";
import { abbr } from "./abbr.ts";

Deno.test("anchor tag element", async (t) => {
  await t.step("anchor with attributes", async () => {
    const actual = abbr(
      "HTML",
      {
        attributes: {
          title: "HyperText Markup Language",
        },
      },
    );

    const expected = `<abbr title="HyperText Markup Language">HTML</abbr>`;
    const rendered = await renderToString(actual, { minify: true });
    assertEquals(rendered, expected);
  });
});
