import { assertEquals } from "asserts";
import { renderToString } from "../deps.ts";
import { head } from "./head.ts";

Deno.test("head tag element", async (t) => {
  await t.step("head without attributes", async () => {
    const actual = head("Content");

    const expected = `<head>Content</head>`;

    const rendered = await renderToString(actual, { minify: true });
    assertEquals(rendered, expected);
  });

  await t.step("head with attributes", async () => {
    const actual = head(
      "Content",
      {
        attributes: {},
      },
    );

    const expected = `<head>Content</head>`;
    const rendered = await renderToString(actual, { minify: true });
    assertEquals(rendered, expected);
  });
});
