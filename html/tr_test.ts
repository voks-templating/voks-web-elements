import { assertEquals } from "asserts";
import { minify, renderToString } from "../deps.ts";
import { tr } from "./tr.ts";

Deno.test("tr tag element", async (t) => {
  await t.step("tr without attributes", async () => {
    const actual = tr("");
    const expected = `<tr></tr>`;

    const rendered = minify(await renderToString(actual));
    assertEquals(rendered, expected);
  });

  await t.step("tr with attributes", async () => {
    const actual = tr("", {});

    const expected = `<tr></tr>`;
    const rendered = minify(await renderToString(actual));
    assertEquals(rendered, expected);
  });

  await t.step("tr with attributes", async () => {
    const actual = tr(
      "Content",
      {},
    );

    const expected = `<tr>Content</tr>`;
    const rendered = minify(await renderToString(actual));
    assertEquals(rendered, expected);
  });
});
