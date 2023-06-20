import { assertEquals } from "asserts";
import { renderToString, minify } from "../deps.ts";
import { section } from "./section.ts";

Deno.test("section tag element", async (t) => {
  await t.step("section without attributes", async () => {
    const actual = section("Content");

    const expected = `<section>Content</section>`;

    const rendered = minify(await renderToString(actual));
    assertEquals(rendered, expected);
  });

  await t.step("section with attributes", async () => {
    const actual = section(
      "Content",
      {},
    );

    const expected = `<section>Content</section>`;
    const rendered = minify(await renderToString(actual));
    assertEquals(rendered, expected);
  });
});
