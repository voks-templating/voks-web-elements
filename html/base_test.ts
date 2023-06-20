import { assertEquals } from "asserts";
import { renderToString, minify } from "../deps.ts";
import { base } from "./base.ts";

Deno.test("base tag element", async (t) => {
  await t.step("base with attributes", async () => {
    const actual = base(
      {
        href: "https://example.com/",
        target: "_blank",
      },
    );

    const expected = `<base href="https://example.com/" target="_blank" />`;
    const rendered = minify(await renderToString(actual));
    assertEquals(rendered, expected);
  });
});
