import { assertEquals } from "asserts";
import { minify, renderToString } from "../deps.ts";
import { u } from "./u.ts";

Deno.test("u tag element", async (t) => {
  await t.step("u without attributes", async () => {
    const actual = u("Content");

    const expected = `<u>Content</u>`;

    const rendered = minify(await renderToString(actual));
    assertEquals(rendered, expected);
  });

  await t.step("u with attributes", async () => {
    const actual = u(
      "Content",
    );

    const expected = `<u>Content</u>`;
    const rendered = minify(await renderToString(actual));
    assertEquals(rendered, expected);
  });
});
