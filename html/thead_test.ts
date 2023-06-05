import { assertEquals } from "asserts";
import { renderToString } from "../deps.ts";
import { thead } from "./thead.ts";

Deno.test("thead tag element", async (t) => {
  await t.step("thead without attributes", async () => {
    const actual = thead("Content");

    const expected = `<thead>Content</thead>`;

    const rendered = await renderToString(actual, { minify: true });
    assertEquals(rendered, expected);
  });

  await t.step("thead with attributes", async () => {
    const actual = thead(
      "Content",
      {
        attributes: {},
      },
    );

    const expected = `<thead>Content</thead>`;
    const rendered = await renderToString(actual, { minify: true });
    assertEquals(rendered, expected);
  });
});
