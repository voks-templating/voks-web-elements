import { assertEquals } from "asserts";
import { renderToString, minify } from "../deps.ts";
import { time } from "./time.ts";

Deno.test("time tag element", async (t) => {
  await t.step("time without attributes", async () => {
    const actual = time("Content");

    const expected = `<time>Content</time>`;

    const rendered = minify(await renderToString(actual));
    assertEquals(rendered, expected);
  });

  await t.step("time with attributes", async () => {
    const actual = time(
      "Content",
      {
        datetime: "test",
      },
    );

    const expected = `<time datetime="test">Content</time>`;
    const rendered = minify(await renderToString(actual));
    assertEquals(rendered, expected);
  });
});
