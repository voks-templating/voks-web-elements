import { assertEquals } from "asserts";
import { renderToString } from "../deps.ts";
import { main } from "./main.ts";

Deno.test("main tag element", async (t) => {
  await t.step("main without attributes", async () => {
    const actual = main("Content");
    
    const expected = `<main>Content</main>`;

    const rendered = await renderToString(actual, { minify: true });
    assertEquals(rendered, expected);
  });

  await t.step("main with attributes", async () => {

    const actual = main(
    "Content",
      {
        attributes: {},
      },
    );

    
    const expected = `<main>Content</main>`;
    const rendered = await renderToString(actual, { minify: true });
    assertEquals(rendered, expected);
  });
});
  