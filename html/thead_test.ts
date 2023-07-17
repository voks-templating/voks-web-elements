import { assertEquals } from "asserts";
import { minify, renderToString } from "../deps.ts";
import { thead } from "./thead.ts";

Deno.test("thead tag element", async (t) => {
  await t.step("thead without attributes", async () => {
    const actual = thead("Content");

    const expected = `<thead>Content</thead>`;

    const rendered = minify(await renderToString(actual));
    assertEquals(rendered, expected);
  });

  await t.step("thead with attributes", async () => {
    const actual = thead(
      "Content",
    );

    const expected = `<thead>Content</thead>`;
    const rendered = minify(await renderToString(actual));
    assertEquals(rendered, expected);
  });
});
