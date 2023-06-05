import { assertEquals } from "asserts";
import { renderToString } from "../deps.ts";
import { time } from "./time.ts";

Deno.test("time tag element", async (t) => {
  await t.step("time without attributes", async () => {
    const actual = time("Content");
    
    const expected = `<time>Content</time>`;

    const rendered = await renderToString(actual, { minify: true });
    assertEquals(rendered, expected);
  });

  await t.step("time with attributes", async () => {

    const actual = time(
    "Content",
      {
        attributes: {},
      },
    );

    
    const expected = `<time>Content</time>`;
    const rendered = await renderToString(actual, { minify: true });
    assertEquals(rendered, expected);
  });
});
  