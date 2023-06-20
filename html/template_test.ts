import { assertEquals } from "asserts";
import { minify, renderToString } from "../deps.ts";
import { template } from "./template.ts";

Deno.test("template tag element", async (t) => {
  await t.step("template without attributes", async () => {
    const actual = template("Content");

    const expected = `<template>Content</template>`;

    const rendered = minify(await renderToString(actual));
    assertEquals(rendered, expected);
  });

  await t.step("template with attributes", async () => {
    const actual = template(
      "Content",
      {},
    );

    const expected = `<template>Content</template>`;
    const rendered = minify(await renderToString(actual));
    assertEquals(rendered, expected);
  });
});
