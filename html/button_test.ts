import { assertEquals } from "asserts";
import { minify, renderToString } from "../deps.ts";
import { button } from "./button.ts";

Deno.test("button tag element", async (t) => {
  await t.step("button without attributes", async () => {
    const actual = button("Content");

    const expected = `<button>Content</button>`;

    const rendered = minify(await renderToString(actual));
    assertEquals(rendered, expected);
  });

  await t.step("button with attributes", async () => {
    const actual = button(
      {
        autofocus: true,
        disabled: true,
        form: "form-id",
        formaction: "https://deno.land",
        formenctype: "multipart/form-data",
        formmethod: "get",
        formnovalidate: true,
        formtarget: "_blank",
        name: "button-name",
        popovertarget: "target-id",
        popovertargetaction: "hide",
        type: "submit",
        value: "button-value",
      },
      "Content",
    );

    const expected =
      `<button autofocus disabled form="form-id" formaction="https://deno.land" formenctype="multipart/form-data" formmethod="get" formnovalidate formtarget="_blank" name="button-name" popovertarget="target-id" popovertargetaction="hide" type="submit" value="button-value">Content</button>`;
    const rendered = minify(await renderToString(actual));
    assertEquals(rendered, expected);
  });
});
