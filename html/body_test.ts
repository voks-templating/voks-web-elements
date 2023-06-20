import { assertEquals } from "asserts";
import { minify, renderToString } from "../deps.ts";
import { body } from "./body.ts";

Deno.test("body tag element", async (t) => {
  await t.step("body with attributes", async () => {
    const actual = body(
      "Content",
      {
        onafterprint: "functionRef",
        onbeforeunload: "functionRef",
        onblur: "functionRef",
        onerror: "functionRef",
        onfocus: "functionRef",
        onhashchange: "functionRef",
        onlanguagechange: "functionRef",
        onload: "functionRef",
        onmessage: "functionRef",
        onoffline: "functionRef",
        ononline: "functionRef",
        onpopstate: "functionRef",
        onredo: "functionRef",
        onresize: "functionRef",
        onstorage: "functionRef",
        onundo: "functionRef",
        onunload: "functionRef",
      },
    );

    const expected =
      `<body onafterprint="functionRef" onbeforeunload="functionRef" onblur="functionRef" onerror="functionRef" onfocus="functionRef" onhashchange="functionRef" onlanguagechange="functionRef" onload="functionRef" onmessage="functionRef" onoffline="functionRef" ononline="functionRef" onpopstate="functionRef" onredo="functionRef" onresize="functionRef" onstorage="functionRef" onundo="functionRef" onunload="functionRef">Content</body>`;
    const rendered = minify(await renderToString(actual));
    assertEquals(rendered, expected);
  });
});
