import { assertEquals } from "asserts";
import { renderToString } from "../deps.ts";
import { div } from "./div.ts";

Deno.test("div tag element", async (t) => {
  await t.step("div without attributes", async () => {
    const actual = div("Content");

    const expected = `<div>Content</div>`;

    const rendered = await renderToString(actual, { minify: true });
    assertEquals(rendered, expected);
  });

  await t.step("div with attributes", async () => {
    const actual = div(
      "Content",
      {},
    );

    const expected = `<div>Content</div>`;
    const rendered = await renderToString(actual, { minify: true });
    assertEquals(rendered, expected);
  });
});

Deno.test("div data attributes", async (t) => {
  await t.step("div with data-* attributes", async () => {
    const actual = div("", {
      dataFubar: "fubar",
      "data-fabula": "fabula",
    });

    const expected = `<div data-fabula="fabula" data-fubar="fubar"></div>`;
    const rendered = await renderToString(actual, { minify: true });
    assertEquals(rendered, expected);
  });
});

Deno.test("input with global attributes", async (t) => {
  await t.step("input class attribute", async () => {
    const actual = div("", {
      class: "fubar fabula",
    });

    const expected = `<div class="fubar fabula"></div>`;
    const rendered = await renderToString(actual, { minify: true });
    assertEquals(rendered, expected);
  });
});
