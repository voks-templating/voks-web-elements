import { assertEquals } from "asserts";
import { minify, renderToString } from "../deps.ts";
import { output } from "./output.ts";

Deno.test("output tag element", async (t) => {
  await t.step("output without attributes", async () => {
    const actual = output("Content");

    const expected = `<output>Content</output>`;

    const rendered = minify(await renderToString(actual));
    assertEquals(rendered, expected);
  });

  await t.step("output with attributes", async () => {
    const actual = output(
      "Content",
      {
        for: "id",
        form: "form",
        name: "name",
      },
    );

    const expected =
      `<output for="id" form="form" name="name">Content</output>`;
    const rendered = minify(await renderToString(actual));
    assertEquals(rendered, expected);
  });
});
