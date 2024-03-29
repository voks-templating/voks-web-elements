import { assertEquals } from "asserts";
import { minify, renderToString } from "../deps.ts";
import { script } from "./script.ts";

Deno.test("script tag element", async (t) => {
  await t.step("script without attributes", async () => {
    const actual = script("Content");

    const expected = `<script>Content</script>`;

    const rendered = minify(await renderToString(actual));
    assertEquals(rendered, expected);
  });

  await t.step("script with attributes", async () => {
    const actual = script(
      {
        async: true,
        defer: true,
        crossorigin: "anonymous",
        integrity: "integrity",
        nomodule: true,
        nonce: "nonce",
        referrerpolicy: "no-referrer",
        src: "src",
        type: "module",
      },
      "Content",
    );

    const expected =
      `<script async crossorigin="anonymous" defer integrity="integrity" nomodule nonce="nonce" referrerpolicy="no-referrer" src="src" type="module">Content</script>`;
    const rendered = minify(await renderToString(actual));
    assertEquals(rendered, expected);
  });
});
