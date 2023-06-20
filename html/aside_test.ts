import { assertEquals } from "asserts";
import { html, minify, renderToString } from "../deps.ts";
import { aside } from "./aside.ts";

Deno.test("aside tag element", async (t) => {
  await t.step("aside with attributes", async () => {
    const actual = aside(
      html`<p>The movie earned $87 million during its initial release.</p>`,
      {},
    );

    const expected =
      `<aside><p>The movie earned $87 million during its initial release.</p></aside>`;
    const rendered = minify(await renderToString(actual));
    assertEquals(rendered, expected);
  });
});
