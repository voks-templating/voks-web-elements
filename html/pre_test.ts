import { assertEquals } from "asserts";
import { minify, renderToString } from "../deps.ts";
import { pre } from "./pre.ts";

Deno.test("pre tag element", async (t) => {
  await t.step("pre without attributes", async () => {
    const actual = pre("Content");

    const expected = `<pre>Content</pre>`;

    const rendered = minify(await renderToString(actual));
    assertEquals(rendered, expected);
  });

  await t.step("pre with attributes", async () => {
    const actual = pre(
      "Content",
    );

    const expected = `<pre>Content</pre>`;
    const rendered = minify(await renderToString(actual));
    assertEquals(rendered, expected);
  });
});
