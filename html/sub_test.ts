import { assertEquals } from "asserts";
import { minify, renderToString } from "../deps.ts";
import { sub } from "./sub.ts";

Deno.test("sub tag element", async (t) => {
  await t.step("sub without attributes", async () => {
    const actual = sub("Content");

    const expected = `<sub>Content</sub>`;

    const rendered = minify(await renderToString(actual));
    assertEquals(rendered, expected);
  });

  await t.step("sub with attributes", async () => {
    const actual = sub(
      "Content",
    );

    const expected = `<sub>Content</sub>`;
    const rendered = minify(await renderToString(actual));
    assertEquals(rendered, expected);
  });
});
