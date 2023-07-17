import { assertEquals } from "asserts";
import { minify, renderToString } from "../deps.ts";
import { source } from "./source.ts";

Deno.test("source tag element", async (t) => {
  await t.step("source without attributes", async () => {
    const actual = source("Content");

    const expected = `<source>Content</source>`;

    const rendered = minify(await renderToString(actual));
    assertEquals(rendered, expected);
  });

  await t.step("source with attributes", async () => {
    const actual = source(
      {
        type: "test",
        src: "test",
        srcset: "test",
        sizes: "test",
        media: "test",
        height: 100,
        width: 100,
      },
      "Content",
    );

    const expected =
      `<source height="100" media="test" sizes="test" src="test" srcset="test" type="test" width="100">Content</source>`;
    const rendered = minify(await renderToString(actual));
    assertEquals(rendered, expected);
  });
});
