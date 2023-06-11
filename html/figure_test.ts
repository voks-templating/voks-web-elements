import { assertEquals } from "asserts";
import { renderToString } from "../deps.ts";
import { figure } from "./figure.ts";

Deno.test("figure tag element", async (t) => {
  await t.step("figure without attributes", async () => {
    const actual = figure("Content");

    const expected = `<figure>Content</figure>`;

    const rendered = await renderToString(actual, { minify: true });
    assertEquals(rendered, expected);
  });

  await t.step("figure with attributes", async () => {
    const actual = figure(
      "Content",
      {},
    );

    const expected = `<figure>Content</figure>`;
    const rendered = await renderToString(actual, { minify: true });
    assertEquals(rendered, expected);
  });
});
