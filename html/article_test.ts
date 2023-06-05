import { assertEquals } from "asserts";
import { html, renderToString } from "../deps.ts";
import { article } from "./article.ts";

Deno.test("article tag element", async (t) => {
  await t.step("article with with content", async () => {
    const actual = article(
      html`<h1>Weather forecast for Seattle</h1>
      <article class="day-forecast">
          <h2>03 March 2018</h2>
          <p>Rain.</p>
      </article>
      <article class="day-forecast">
          <h2>04 March 2018</h2>
          <p>Periods of rain.</p>
      </article>
      <article class="day-forecast">
          <h2>05 March 2018</h2>
          <p>Heavy rain.</p>
      </article>`,
    );

    const expected =
      `<article>You can contact author at <a href="http://www.somedomain.com/contact"> www.somedomain.com</a>.<br /> If you see any bugs, please <a href="mailto:webmaster@somedomain.com"> contact webmaster</a>.<br /> You may also want to visit us:<br /> Mozilla Foundation<br /> 331 E Evelyn Ave<br /> Mountain View, CA 94041<br /> USA</article>`;
    const rendered = await renderToString(actual, { minify: true });
    assertEquals(rendered, expected);
  });
});
