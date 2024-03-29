import { assertEquals } from "asserts";
import { minify, renderToString } from "../deps.ts";
import { bdo } from "./bdo.ts";

Deno.test("bdo tag element", async (t) => {
  await t.step("bdo with attributes", async () => {
    const actual = bdo(
      {
        dir: "rtl",
      },
      "Content",
    );

    const expected = `<bdo dir="rtl">Content</bdo>`;
    const rendered = minify(await renderToString(actual));
    assertEquals(rendered, expected);
  });
});
