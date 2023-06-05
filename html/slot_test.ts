import { assertEquals } from "asserts";
import { renderToString } from "../deps.ts";
import { slot } from "./slot.ts";

Deno.test("slot tag element", async (t) => {
  await t.step("slot without attributes", async () => {
    const actual = slot("Content");

    const expected = `<slot>Content</slot>`;

    const rendered = await renderToString(actual, { minify: true });
    assertEquals(rendered, expected);
  });

  await t.step("slot with attributes", async () => {
    const actual = slot(
      "Content",
      {
        attributes: {},
      },
    );

    const expected = `<slot>Content</slot>`;
    const rendered = await renderToString(actual, { minify: true });
    assertEquals(rendered, expected);
  });
});
