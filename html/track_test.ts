import { assertEquals } from "asserts";
import { renderToString } from "../deps.ts";
import { track } from "./track.ts";

Deno.test("track tag element", async (t) => {
  await t.step("track without attributes", async () => {
    const actual = track("Content");

    const expected = `<track>Content</track>`;

    const rendered = await renderToString(actual, { minify: true });
    assertEquals(rendered, expected);
  });

  await t.step("track with attributes", async () => {
    const actual = track(
      "Content",
      {
        default: true,
        kind: "subtitles",
        description: "test",
        chapters: "test",
        metadata: "test",
      },
    );

    const expected =
      `<track chapters="test" default description="test" kind="subtitles" metadata="test">Content</track>`;
    const rendered = await renderToString(actual, { minify: true });
    assertEquals(rendered, expected);
  });
});