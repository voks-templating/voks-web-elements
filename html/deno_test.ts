import { assertEquals } from "asserts";
import { renderToString } from "../deps.ts";
import { deno } from "./deno.ts";

Deno.test("deno tag element", async (t) => {
  await t.step("deno without attributes", async () => {
    const actual = deno();
    
    const expected = `<deno></deno>`;

    const rendered = await renderToString(actual, { minify: true });
    assertEquals(rendered, expected);
  });

  await t.step("deno with attributes", async () => {

    const actual = deno(
      {
        attributes: {},
      },
    );

    
    const expected = `<deno></deno>`;
    const rendered = await renderToString(actual, { minify: true });
    assertEquals(rendered, expected);
  });
});
  