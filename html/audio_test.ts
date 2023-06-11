import { assertEquals } from "asserts";
import { renderToString } from "../deps.ts";
import { audio } from "./audio.ts";

Deno.test("audio tag element", async (t) => {
  await t.step("audio with attributes", async () => {
    const actual = audio(
      "Content",
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
    );

    const expected =
      `<audio autoplay controls controlslist="nodownload" anonymous use-credentials disableremoteplayback loop muted preload="auto">Content</audio>`;
    const rendered = await renderToString(actual, { minify: true });
    assertEquals(rendered, expected);
  });
});
