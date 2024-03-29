import { assertEquals } from "asserts";
import { minify, renderToString } from "../deps.ts";
import { iframe } from "./iframe.ts";

Deno.test("iframe tag element", async (t) => {
  await t.step("iframe without attributes", async () => {
    const actual = iframe("Content");

    const expected = `<iframe>Content</iframe>`;

    const rendered = minify(await renderToString(actual));
    assertEquals(rendered, expected);
  });

  await t.step("iframe with attributes", async () => {
    const actual = iframe(
      {
        allow: "autoplay",
        allowfullscreen: true,
        height: 100,
        width: 100,
        loading: "lazy",
        name: "name",
        referrerpolicy: "no-referrer",
        sandbox:
          "allow-forms allow-modals allow-popups allow-presentation allow-same-origin allow-scripts",
        src: "https://example.com",
        srcdoc: "srcdoc",
      },
      "Content",
    );

    const expected =
      `<iframe allow="autoplay" allowfullscreen height="100" loading="lazy" name="name" referrerpolicy="no-referrer" sandbox="allow-forms allow-modals allow-popups allow-presentation allow-same-origin allow-scripts" src="https://example.com" srcdoc="srcdoc" width="100">Content</iframe>`;
    const rendered = minify(await renderToString(actual));
    assertEquals(rendered, expected);
  });
});
