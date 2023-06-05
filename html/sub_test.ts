import { assertEquals } from "asserts";
import { renderToString } from "../deps.ts";
import { sub } from "./sub.ts";

Deno.test("sub tag element", async (t) => {
  await t.step("sub without attributes", async () => {
    const actual = sub("Content");
    
    const expected = `<sub>Content</sub>`;

    const rendered = await renderToString(actual, { minify: true });
    assertEquals(rendered, expected);
  });

  await t.step("sub with attributes", async () => {

    const actual = sub(
    "Content",
      {
        attributes: {},
      },
    );

    
    const expected = `<sub>Content</sub>`;
    const rendered = await renderToString(actual, { minify: true });
    assertEquals(rendered, expected);
  });
});
  