import { assertEquals } from "asserts";
import { html, minify, renderToString } from "../deps.ts";
import { datalist } from "./datalist.ts";

Deno.test("datalist tag element", async (t) => {
  await t.step("datalist without attributes", async () => {
    const actual = datalist("Content");

    const expected = `<datalist>Content</datalist>`;

    const rendered = minify(await renderToString(actual));
    assertEquals(rendered, expected);
  });

  await t.step("datalist with attributes", async () => {
    const actual = datalist(
      html`<option value="Chrome"></option>
    <option value="Firefox"></option>
    <option value="Opera"></option>
    <option value="Safari"></option>
    <option value="Microsoft Edge"></option>`,
      {
        id: "browsers", // id is a global attribute
      },
    );

    const expected =
      `<datalist id="browsers"><option value="Chrome"></option><option value="Firefox"></option><option value="Opera"></option><option value="Safari"></option><option value="Microsoft Edge"></option></datalist>`;
    const rendered = minify(await renderToString(actual));
    assertEquals(rendered, expected);
  });
});
