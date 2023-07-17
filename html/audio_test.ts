import { assertEquals } from "asserts";
import { minify, renderToString } from "../deps.ts";
import { audio } from "./audio.ts";

Deno.test("audio tag element", async (t) => {
  await t.step("audio with attributes", async () => {
    const actual = audio(
      {
        autoplay: true,
        controls: true,
        controlslist: "nodownload",
        anonymous: true,
        useCredentials: true,
        disableremoteplayback: true,
        loop: true,
        muted: true,
        preload: "auto",
      },
      "Content",
    );

    const expected =
      `<audio anonymous autoplay controls controlslist="nodownload" disableremoteplayback loop muted preload="auto" use-credentials>Content</audio>`;
    const rendered = minify(await renderToString(actual));
    assertEquals(rendered, expected);
  });
});
