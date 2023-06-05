import { assertEquals } from "asserts";
import { renderToString } from "../deps.ts";
import { br } from "./br.ts";

Deno.test("br tag element", async (t) => {
  await t.step("br without attributes", async () => {
    const actual = br();
    const expected = `<br>`;

    const rendered = await renderToString(actual, { minify: true });
    assertEquals(rendered, expected);
  });
});
