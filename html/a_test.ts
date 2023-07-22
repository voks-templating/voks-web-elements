import { assertEquals } from "asserts";
import { html, minify, renderToString } from "../deps.ts";
import { a } from "./a.ts";
import { span } from "./span.ts";

Deno.test("anchor tag element", async (t) => {
  await t.step("anchor with attributes", async () => {
    const actual = a(
      {
        download: "filename.txt",
        href: "https://example.com",
        hreflang: "en",
        ping: "https://example.com",
        refererPolicy: "no-referrer",
        rel: "noopener",
        target: "_blank",
        type: "text/html",
      },
      "anchor",
    );

    const expected =
      `<a download="filename.txt" href="https://example.com" hreflang="en" ping="https://example.com" referer-policy="no-referrer" rel="noopener" target="_blank" type="text/html">anchor</a>`;
    const rendered = minify(await renderToString(actual));
    assertEquals(rendered, expected);
  });

  await t.step("anchor with html content as label", async () => {
    const actual = a(
      {
        download: "filename.txt",
      },
      html`<span>anchor</span>`,
    );

    const expected = `<a download="filename.txt"><span>anchor</span></a>`;
    const rendered = minify(await renderToString(actual));
    assertEquals(rendered, expected);
  });

  await t.step("anchor with no attributes but content", async () => {
    const actual = a(html`<span>anchor</span>`);

    const expected = `<a><span>anchor</span></a>`;
    const rendered = minify(await renderToString(actual));
    assertEquals(rendered, expected);
  });

  await t.step("anchor attributes but no content", async () => {
    const actual = a({ download: "foobar.doc" });

    const expected = `<a download="foobar.doc"></a>`;
    const rendered = minify(await renderToString(actual));
    assertEquals(rendered, expected);
  });

  await t.step("passing child elements as array", async () => {
    const actual = a({ download: "foobar.doc" }, [
      span("hello,"),
      span("world!"),
    ]);

    const expected =
      `<a download="foobar.doc"><span>hello,</span><span>world!</span></a>`;
    const rendered = minify(await renderToString(actual));
    assertEquals(rendered, expected);
  });

  await t.step("passing child elements as array", async () => {
    const actual = a({ download: "foobar.doc" }, [
      html`<span>hello,</span>`,
      html`<span>world!</span>`,
    ]);

    const expected =
      `<a download="foobar.doc"><span>hello,</span><span>world!</span></a>`;
    const rendered = minify(await renderToString(actual));
    assertEquals(rendered, expected);
  });
});
