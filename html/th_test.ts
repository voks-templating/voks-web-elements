import { assertEquals } from "asserts";
import { renderToString } from "../deps.ts";
import { th } from "./th.ts";

Deno.test("th tag element", async (t) => {
  await t.step("th without attributes", async () => {
    const actual = th("Content");
    
    const expected = `<th>Content</th>`;

    const rendered = await renderToString(actual, { minify: true });
    assertEquals(rendered, expected);
  });

  await t.step("th with attributes", async () => {

    const actual = th(
    "Content",
      {
        attributes: {},
      },
    );

    
    const expected = `<th>Content</th>`;
    const rendered = await renderToString(actual, { minify: true });
    assertEquals(rendered, expected);
  });
});
  