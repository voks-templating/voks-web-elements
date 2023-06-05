import { assertEquals } from "asserts";
import { html, renderToString } from "../deps.ts";
import { address } from "./address.ts";

Deno.test("address tag element", async (t) => {
  await t.step("address with simple address string", async () => {
    const actual = address(
      "Examplestreet 1, 12345 Exampletown",
    );

    const expected = `<address>Examplestreet 1, 12345 Exampletown</address>`;
    const rendered = await renderToString(actual, { minify: true });
    assertEquals(rendered, expected);
  });

  await t.step("address with child content", async () => {
    const actual = address(
      html`You can contact author at
      <a href="http://www.somedomain.com/contact"> www.somedomain.com</a>.<br />
      If you see any bugs, please
      <a href="mailto:webmaster@somedomain.com"> contact webmaster</a>.<br />
      You may also want to visit us:<br />
      Mozilla Foundation<br />
      331 E Evelyn Ave<br />
      Mountain View, CA 94041<br />
      USA`,
    );

    const expected =
      `<address>You can contact author at <a href="http://www.somedomain.com/contact"> www.somedomain.com</a>.<br /> If you see any bugs, please <a href="mailto:webmaster@somedomain.com"> contact webmaster</a>.<br /> You may also want to visit us:<br /> Mozilla Foundation<br /> 331 E Evelyn Ave<br /> Mountain View, CA 94041<br /> USA</address>`;
    const rendered = await renderToString(actual, { minify: true });
    assertEquals(rendered, expected);
  });
});
