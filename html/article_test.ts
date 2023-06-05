import { assertEquals } from "asserts";
import { html, renderToString } from "../deps.ts";
import { article } from "./article.ts";

Deno.test("article tag element", async (t) => {
  await t.step("article with with content", async () => {
    const actual = article(
      html`You can contact author at <a href="http://www.somedomain.com/contact"> www.somedomain.com</a>.<br /> If you see any
      bugs, please <a href="mailto:webmaster@somedomain.com"> contact webmaster</a>.<br /> You may also want to visit
      us:<br /> Mozilla Foundation<br /> 331 E Evelyn Ave<br /> Mountain View, CA 94041<br /> USA`,
    );

    const expected =
      `<article>You can contact author at <a href="http://www.somedomain.com/contact"> www.somedomain.com</a>.<br /> If you see any bugs, please <a href="mailto:webmaster@somedomain.com"> contact webmaster</a>.<br /> You may also want to visit us:<br /> Mozilla Foundation<br /> 331 E Evelyn Ave<br /> Mountain View, CA 94041<br /> USA</article>`;
    const rendered = await renderToString(actual, { minify: true });
    assertEquals(rendered, expected);
  });
});
