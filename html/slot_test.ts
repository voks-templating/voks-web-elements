import { assertEquals } from "asserts";
import { minify, renderToString } from "../deps.ts";
import { slot } from "./slot.ts";

Deno.test("slot tag element", async (t) => {
  await t.step("slot without attributes", async () => {
    const actual = slot("Content");

    const expected = `<slot>Content</slot>`;

    const rendered = minify(await renderToString(actual));
    assertEquals(rendered, expected);
  });

  await t.step("slot with attributes", async () => {
    const actual = slot(
      "Content",
      {
        name: "test",
      },
    );

    const expected = `<slot name="test">Content</slot>`;
    const rendered = minify(await renderToString(actual));
    assertEquals(rendered, expected);
  });
});
