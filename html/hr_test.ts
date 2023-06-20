import { assertEquals } from "asserts";
import { minify, renderToString } from "../deps.ts";
import { hr } from "./hr.ts";

Deno.test("hr tag element", async (t) => {
  await t.step("hr without attributes", async () => {
    const actual = hr();
    const expected = `<hr \\>`;

    const rendered = minify(await renderToString(actual));
    assertEquals(rendered, expected);
  });

  await t.step("hr with attributes", async () => {
    const actual = hr(
      {},
    );

    const expected = `<hr \\>`;
    const rendered = minify(await renderToString(actual));
    assertEquals(rendered, expected);
  });
});
