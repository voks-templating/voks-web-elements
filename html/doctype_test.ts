import { assertEquals } from "asserts";
import { minify, renderToString } from "../deps.ts";
import { doctype } from "./doctype.ts";

Deno.test("doctype tag element", async (t) => {
  await t.step("doctype without attributes", async () => {
    const actual = doctype();
    const expected = `<!DOCTYPE html>`;

    const rendered = minify(await renderToString(actual));
    assertEquals(rendered, expected);
  });
});
