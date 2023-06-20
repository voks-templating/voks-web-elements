import { assertEquals } from "asserts";
import { renderToString, minify } from "../deps.ts";
import { area } from "./area.ts";

Deno.test("area tag element", async (t) => {
  await t.step("area", async () => {
    const actual = area(
      {
        alt: "alternate text",
        coords: "0,0,82,126",
        download: "map.json",
        href: "https://example.com/map.json",
        hreflang: "en",
        ping: "https://example.com",
        referrerpolicy: "no-referrer",
        rel: "noopener",
        shape: "rect",
        target: "_blank",
      },
    );

    const expected =
      `<area alt="alternate text" coords="0,0,82,126" download="map.json" href="https://example.com/map.json" hreflang="en" ping="https://example.com" referrerpolicy="no-referrer" rel="noopener" shape="rect" target="_blank">`;
    const rendered = minify(await renderToString(actual));
    assertEquals(rendered, expected);
  });
});
