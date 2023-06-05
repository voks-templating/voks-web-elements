import { assertEquals } from "asserts";
import { renderToString } from "../deps.ts";
import { bdi } from "./bdi.ts";

Deno.test("bdi tag element", async (t) => {
  await t.step("bdi with attributes", async () => {
    const actual = bdi(
      "Content",
      {
        attributes: {},
      },
    );

    const expected = `<bdi>Content</bdi>`;
    const rendered = await renderToString(actual, { minify: true });
    assertEquals(rendered, expected);
  });
});
