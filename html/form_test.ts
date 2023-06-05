import { assertEquals } from "asserts";
import { renderToString } from "../deps.ts";
import { form } from "./form.ts";

Deno.test("form tag element", async (t) => {
  await t.step("form without attributes", async () => {
    const actual = form("Content");

    const expected = `<form>Content</form>`;

    const rendered = await renderToString(actual, { minify: true });
    assertEquals(rendered, expected);
  });

  await t.step("form with attributes", async () => {
    const actual = form(
      "Content",
      {
        attributes: {
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
      },
    );

    const expected =
      `<form accept-charset="UTF-8" autocapitalize="none" autocomplete="off" name="name" rel="nofollow" action="/publish" method="post" enctype="multipart/form-data" novalidate target="_blank">Content</form>`;
    const rendered = await renderToString(actual, { minify: true });
    assertEquals(rendered, expected);
  });
});
