import { assertEquals } from "asserts";
import { minify, renderToString } from "../deps.ts";
import { object } from "./object.ts";

Deno.test("object tag element", async (t) => {
  await t.step("object with attributes", async () => {
    const actual = object(
      {
        data: "https://example.com",
        form: "form-id",
        height: 100,
        width: 100,
        name: "object-name",
        type: "video/mp4",
        usemap: "#map-id",
      },
      "Content",
    );

    const expected =
      `<object data="https://example.com" form="form-id" height="100" name="object-name" type="video/mp4" usemap="#map-id" width="100">Content</object>`;
    const rendered = minify(await renderToString(actual));
    assertEquals(rendered, expected);
  });
});
