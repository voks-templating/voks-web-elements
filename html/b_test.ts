import { assertEquals } from "asserts";
  import { renderToString } from "../deps.ts";
  import { b } from "./b.ts";

  Deno.test("b tag element", async (t) => {
    await t.step("b with attributes", async () => {

      const actual = b(
      "Content",
        {
          attributes: {},
        },
      );

      const expected = `<b>Content</b>`;
      const rendered = await renderToString(actual, { minify: true });
      assertEquals(rendered, expected);
    });
  });

  