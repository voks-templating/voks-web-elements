import { assertEquals } from "asserts";
import { renderToString } from "../deps.ts";
import { source } from "./source.ts";

Deno.test("source tag element", async (t) => {
  await t.step("source without attributes", async () => {
    const actual = source("Content");

    const expected = `<source>Content</source>`;

    const rendered = await renderToString(actual, { minify: true });
    assertEquals(rendered, expected);
  });

  await t.step("source with attributes", async () => {
    const actual = source(
      "Content",
      {
        type: "test",
        src: "test",
        srcset: "test",
        sizes: "test",
        media: "test",
        height: 100,
        width: 100,
      },
    );

    const expected =
      `<source type="test" src="test" srcset="test" sizes="test" media="test" height="100" width="100">Content</source>`;
    const rendered = await renderToString(actual, { minify: true });
    assertEquals(rendered, expected);
  });
});
