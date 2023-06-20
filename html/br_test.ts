import { assertEquals } from "asserts";
import { renderToString, minify } from "../deps.ts";
import { br } from "./br.ts";

Deno.test("br tag element", async (t) => {
  await t.step("br without attributes", async () => {
    const actual = br();
    const expected = `<br>`;

    const rendered = minify(await renderToString(actual));
    assertEquals(rendered, expected);
  });
});
