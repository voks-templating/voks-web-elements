import { assertEquals } from "asserts";
import { renderToString, minify } from "../deps.ts";
import { figure } from "./figure.ts";

Deno.test("figure tag element", async (t) => {
  await t.step("figure without attributes", async () => {
    const actual = figure("Content");

    const expected = `<figure>Content</figure>`;

    const rendered = minify(await renderToString(actual));
    assertEquals(rendered, expected);
  });

  await t.step("figure with attributes", async () => {
    const actual = figure(
      "Content",
      {},
    );

    const expected = `<figure>Content</figure>`;
    const rendered = minify(await renderToString(actual));
    assertEquals(rendered, expected);
  });
});
