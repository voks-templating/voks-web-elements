import { assertEquals } from "asserts";
import { minify, renderToString } from "../deps.ts";
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
      {
        datetime: "test",
      },
      "Content",
    );

    const expected = `<time datetime="test">Content</time>`;
    const rendered = minify(await renderToString(actual));
    assertEquals(rendered, expected);
  });
});
