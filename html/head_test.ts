import { assertEquals } from "asserts";
import { renderToString, minify } from "../deps.ts";
import { head } from "./head.ts";

Deno.test("head tag element", async (t) => {
  await t.step("head without attributes", async () => {
    const actual = head("Content");

    const expected = `<head>Content</head>`;

    const rendered = minify(await renderToString(actual));
    assertEquals(rendered, expected);
  });

  await t.step("head with attributes", async () => {
    const actual = head(
      "Content",
      {},
    );

    const expected = `<head>Content</head>`;
    const rendered = minify(await renderToString(actual));
    assertEquals(rendered, expected);
  });
});
