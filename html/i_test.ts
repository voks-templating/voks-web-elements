import { assertEquals } from "asserts";
import { renderToString, minify } from "../deps.ts";
import { i } from "./i.ts";

Deno.test("i tag element", async (t) => {
  await t.step("i without attributes", async () => {
    const actual = i();
    const expected = `<i \\>`;

    const rendered = minify(await renderToString(actual));
    assertEquals(rendered, expected);
  });

  await t.step("i with attributes", async () => {
    const actual = i(
      {},
    );

    const expected = `<i \\>`;
    const rendered = minify(await renderToString(actual));
    assertEquals(rendered, expected);
  });
});
