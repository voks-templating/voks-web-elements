import { assertEquals } from "asserts";
import { minify, renderToString } from "../deps.ts";
import { form } from "./form.ts";

Deno.test("form tag element", async (t) => {
  await t.step("form without attributes", async () => {
    const actual = form("Content");

    const expected = `<form>Content</form>`;

    const rendered = minify(await renderToString(actual));
    assertEquals(rendered, expected);
  });

  await t.step("form with attributes", async () => {
    const actual = form(
      {
        acceptCharset: "UTF-8",
        autocapitalize: "none",
        autocomplete: "off",
        name: "name",
        rel: "nofollow",
        action: "/publish",
        method: "post",
        enctype: "multipart/form-data",
        novalidate: true,
        target: "_blank",
      },
      "Content",
    );

    const expected =
      `<form accept-charset="UTF-8" action="/publish" autocapitalize="none" autocomplete="off" enctype="multipart/form-data" method="post" name="name" novalidate rel="nofollow" target="_blank">Content</form>`;
    const rendered = minify(await renderToString(actual));
    assertEquals(rendered, expected);
  });
});
