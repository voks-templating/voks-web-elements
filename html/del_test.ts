import { assertEquals } from "asserts";
import { renderToString, minify } from "../deps.ts";
import { del } from "./del.ts";

Deno.test("del tag element", async (t) => {
  await t.step("del without attributes", async () => {
    const actual = del("Content");

    const expected = `<del>Content</del>`;

    const rendered = minify(await renderToString(actual));
    assertEquals(rendered, expected);
  });

  await t.step("del with attributes", async () => {
    const actual = del(
      "Content",
      {
        cite: "https://deno.land/",
        datetime: "2021-05-27T01:02:03Z",
      },
    );

    const expected =
      `<del cite="https://deno.land/" datetime="2021-05-27T01:02:03Z">Content</del>`;
    const rendered = minify(await renderToString(actual));
    assertEquals(rendered, expected);
  });
});
