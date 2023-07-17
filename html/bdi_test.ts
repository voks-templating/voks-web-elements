import { assertEquals } from "asserts";
import { minify, renderToString } from "../deps.ts";
import { bdi } from "./bdi.ts";

Deno.test("bdi tag element", async (t) => {
  await t.step("bdi with attributes", async () => {
    const actual = bdi(
      "Content",
    );

    const expected = `<bdi>Content</bdi>`;
    const rendered = minify(await renderToString(actual));
    assertEquals(rendered, expected);
  });
});
