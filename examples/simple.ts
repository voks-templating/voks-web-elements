import { html, renderToString } from "../deps.ts";
import {
  body,
  form,
  h1,
  head,
  htmlElement,
  meta,
  textInput,
  title,
} from "../mod.ts";

const documentHead = head(html`
  ${title("Simple")}
  ${meta({ charset: "utf-8" })}
`);

// deno-fmt-ignore
const searchForm = html`
  ${form(html`
    ${textInput({ name: "q" })}
  `, { action: "/search", method: "GET" })}
`
// deno-fmt-ignore
const document = htmlElement(
  html`${documentHead}
    ${body(html`
      ${h1("Simple")}
      ${searchForm}
    `)}
  `,
);

const rendered = await renderToString(document, { minify: true });
console.log(rendered);
