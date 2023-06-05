import { assertEquals } from "asserts";
import { renderToString } from "../deps.ts";
import { details } from "./details.ts";

Deno.test("details tag element", async (t) => {
  await t.step("details without attributes", async () => {
    const actual = details("Content");

    const expected = `<details>Content</details>`;

    const rendered = await renderToString(actual, { minify: true });
    assertEquals(rendered, expected);
  });

  await t.step("details with attributes", async () => {
    const actual = details(
      "Content",
      {
        attributes: {
          open: true,
        },
      },
    );

    const expected = `<details open>Content</details>`;
    const rendered = await renderToString(actual, { minify: true });
    assertEquals(rendered, expected);
  });
});
