import { assertEquals } from "asserts";
import { renderToString } from "../deps.ts";
import { video } from "./video.ts";

Deno.test("video tag element", async (t) => {
  await t.step("video without attributes", async () => {
    const actual = video("Content");

    const expected = `<video>Content</video>`;

    const rendered = await renderToString(actual, { minify: true });
    assertEquals(rendered, expected);
  });

  await t.step("video with attributes", async () => {
    const actual = video(
      "Content",
      {
        attributes: {
          autoplay: true,
          controls: true,
          crossorigin: "anonymous",
          height: 100,
          loop: true,
          muted: true,
          playsinline: true,
          poster: "test",
          preload: "auto",
          src: "test",
          width: 100,
        },
      },
    );

    const expected =
      `<video autoplay controls crossorigin="anonymous" height="100" loop muted playsinline poster="test" preload="auto" src="test" width="100">Content</video>`;
    const rendered = await renderToString(actual, { minify: true });
    assertEquals(rendered, expected);
  });
});
