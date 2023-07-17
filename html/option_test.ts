import { assertEquals } from "asserts";
import { minify, renderToString } from "../deps.ts";
import { option } from "./option.ts";

Deno.test("option tag element", async (t) => {
  await t.step("option without attributes", async () => {
    const actual = option("Content");

    const expected = `<option>Content</option>`;

    const rendered = minify(await renderToString(actual));
    assertEquals(rendered, expected);
  });

  await t.step("option with attributes", async () => {
    const actual = option(
      {
        disabled: true,
        label: "label",
        selected: true,
        value: "value",
      },
      "Content",
    );

    const expected =
      `<option disabled label="label" selected value="value">Content</option>`;
    const rendered = minify(await renderToString(actual));
    assertEquals(rendered, expected);
  });
});
