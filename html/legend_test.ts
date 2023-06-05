import { assertEquals } from "asserts";
import { renderToString } from "../deps.ts";
import { legend } from "./legend.ts";

Deno.test("legend tag element", async (t) => {
  await t.step("legend without attributes", async () => {
    const actual = legend("Content");
    
    const expected = `<legend>Content</legend>`;

    const rendered = await renderToString(actual, { minify: true });
    assertEquals(rendered, expected);
  });

  await t.step("legend with attributes", async () => {

    const actual = legend(
    "Content",
      {
        attributes: {},
      },
    );

    
    const expected = `<legend>Content</legend>`;
    const rendered = await renderToString(actual, { minify: true });
    assertEquals(rendered, expected);
  });
});
  