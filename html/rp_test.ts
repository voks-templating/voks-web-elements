import { assertEquals } from "asserts";
import { renderToString } from "../deps.ts";
import { rp } from "./rp.ts";

Deno.test("rp tag element", async (t) => {
  await t.step("rp without attributes", async () => {
    const actual = rp("Content");

    const expected = `<rp>Content</rp>`;

    const rendered = await renderToString(actual, { minify: true });
    assertEquals(rendered, expected);
  });

  await t.step("rp with attributes", async () => {
    const actual = rp(
      "Content",
      {
        attributes: {},
      },
    );

    const expected = `<rp>Content</rp>`;
    const rendered = await renderToString(actual, { minify: true });
    assertEquals(rendered, expected);
  });
});
