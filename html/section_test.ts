import { assertEquals } from "asserts";
import { renderToString } from "../deps.ts";
import { section } from "./section.ts";

Deno.test("section tag element", async (t) => {
  await t.step("section without attributes", async () => {
    const actual = section("Content");

    const expected = `<section>Content</section>`;

    const rendered = await renderToString(actual, { minify: true });
    assertEquals(rendered, expected);
  });

  await t.step("section with attributes", async () => {
    const actual = section(
      "Content",
      {},
    );

    const expected = `<section>Content</section>`;
    const rendered = await renderToString(actual, { minify: true });
    assertEquals(rendered, expected);
  });
});
