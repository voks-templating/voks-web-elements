import { assertEquals } from "asserts";
import { html, renderToString } from "../deps.ts";
import { a } from "./a.ts";

Deno.test("anchor tag element", async (t) => {
  await t.step("anchor with attributes", async () => {
    const actual = a(
      "anchor",
      {
        attributes: {
          download: "filename.txt",
          href: "https://example.com",
          hreflang: "en",
          ping: "https://example.com",
          refererPolicy: "no-referrer",
          rel: "noopener",
          target: "_blank",
          type: "text/html",
        },
      },
    );

    const expected =
      `<a download="filename.txt" href="https://example.com" hreflang="en" ping="https://example.com" referer-policy="no-referrer" rel="noopener" target="_blank" type="text/html">anchor</a>`;
    const rendered = await renderToString(actual, { minify: true });
    assertEquals(rendered, expected);
  });

  await t.step("anchor with html content as label", async () => {
    const actual = a(
      html`<span>anchor</span>`,
      {
        attributes: {
          download: "filename.txt",
        },
      },
    );

    const expected = `<a download="filename.txt"><span>anchor</span></a>`;
    const rendered = await renderToString(actual, { minify: true });
    assertEquals(rendered, expected);
  });
});
