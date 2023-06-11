import { assertEquals } from "asserts";
import { renderToString } from "../deps.ts";
import { ins } from "./ins.ts";

Deno.test("ins tag element", async (t) => {
  await t.step("ins without attributes", async () => {
    const actual = ins("Content");

    const expected = `<ins>Content</ins>`;

    const rendered = await renderToString(actual, { minify: true });
    assertEquals(rendered, expected);
  });

  await t.step("ins with attributes", async () => {
    const actual = ins(
      "Content",
      {
        cite: "https://deno.land",
        datetime: "2021-05-27T01:02:03Z",
      },
    );

    const expected =
      `<ins cite="https://deno.land" datetime="2021-05-27T01:02:03Z">Content</ins>`;
    const rendered = await renderToString(actual, { minify: true });
    assertEquals(rendered, expected);
  });
});
