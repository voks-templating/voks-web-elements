import { assertEquals } from "asserts";
import { minify, renderToString } from "../deps.ts";
import { hgroup } from "./hgroup.ts";

Deno.test("hgroup tag element", async (t) => {
  await t.step("hgroup without attributes", async () => {
    const actual = hgroup("Content");

    const expected = `<hgroup>Content</hgroup>`;

    const rendered = minify(await renderToString(actual));
    assertEquals(rendered, expected);
  });

  await t.step("hgroup with attributes", async () => {
    const actual = hgroup(
      "Content",
    );

    const expected = `<hgroup>Content</hgroup>`;
    const rendered = minify(await renderToString(actual));
    assertEquals(rendered, expected);
  });
});
