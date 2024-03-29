import { assertEquals } from "asserts";
import { minify, renderToString } from "../deps.ts";
import { footer } from "./footer.ts";

Deno.test("footer tag element", async (t) => {
  await t.step("footer without attributes", async () => {
    const actual = footer("Content");

    const expected = `<footer>Content</footer>`;

    const rendered = minify(await renderToString(actual));
    assertEquals(rendered, expected);
  });

  await t.step("footer with attributes", async () => {
    const actual = footer(
      "Content",
    );

    const expected = `<footer>Content</footer>`;
    const rendered = minify(await renderToString(actual));
    assertEquals(rendered, expected);
  });
});
