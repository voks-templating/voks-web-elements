import { assertEquals } from "asserts";
import { minify, renderToString } from "../deps.ts";
import { optgroup } from "./optgroup.ts";

Deno.test("optgroup tag element", async (t) => {
  await t.step("optgroup without attributes", async () => {
    const actual = optgroup("Content");

    const expected = `<optgroup>Content</optgroup>`;

    const rendered = minify(await renderToString(actual));
    assertEquals(rendered, expected);
  });

  await t.step("optgroup with attributes", async () => {
    const actual = optgroup(
      "Content",
      {
        disabled: true,
        label: "label",
      },
    );

    const expected = `<optgroup disabled label="label">Content</optgroup>`;
    const rendered = minify(await renderToString(actual));
    assertEquals(rendered, expected);
  });
});
