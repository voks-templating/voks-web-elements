import { assertEquals } from "asserts";
import { renderToString, minify } from "../deps.ts";
import { legend } from "./legend.ts";

Deno.test("legend tag element", async (t) => {
  await t.step("legend without attributes", async () => {
    const actual = legend("Content");

    const expected = `<legend>Content</legend>`;

    const rendered = minify(await renderToString(actual));
    assertEquals(rendered, expected);
  });

  await t.step("legend with attributes", async () => {
    const actual = legend(
      "Content",
      {},
    );

    const expected = `<legend>Content</legend>`;
    const rendered = minify(await renderToString(actual));
    assertEquals(rendered, expected);
  });
});
