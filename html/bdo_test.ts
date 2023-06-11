import { assertEquals } from "asserts";
import { renderToString } from "../deps.ts";
import { bdo } from "./bdo.ts";

Deno.test("bdo tag element", async (t) => {
  await t.step("bdo with attributes", async () => {
    const actual = bdo(
      "Content",
      {
        dir: "rtl",
      },
    );

    const expected = `<bdo dir="rtl">Content</bdo>`;
    const rendered = await renderToString(actual, { minify: true });
    assertEquals(rendered, expected);
  });
});
