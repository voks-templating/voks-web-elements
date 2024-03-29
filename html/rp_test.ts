import { assertEquals } from "asserts";
import { minify, renderToString } from "../deps.ts";
import { rp } from "./rp.ts";

Deno.test("rp tag element", async (t) => {
  await t.step("rp without attributes", async () => {
    const actual = rp("Content");

    const expected = `<rp>Content</rp>`;

    const rendered = minify(await renderToString(actual));
    assertEquals(rendered, expected);
  });

  await t.step("rp with attributes", async () => {
    const actual = rp(
      "Content",
    );

    const expected = `<rp>Content</rp>`;
    const rendered = minify(await renderToString(actual));
    assertEquals(rendered, expected);
  });
});
