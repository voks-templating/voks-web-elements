![voks web elements](./docs/voks_elements.svg)

[![deno.land/x version](https://shield.deno.dev/x/voks_web_elements)](https://deno.land/x/voks_web_elements)
[![npm version](https://img.shields.io/npm/v/@voks/voks-web-elements)](https://www.npmjs.com/package/@voks/voks-web-elements)

Voks Web Elements is a list of atomic components, reflecting every standard HTML
Element tag as described at the
[MDN](https://developer.mozilla.org/en-US/docs/Web/HTML/Element). It does not
include deprecated (and yet) no experimental tags.

**API Docs**: https://deno.land/x/voks_web_elements/mod.ts

## [Deno](https://deno.land/x/voks_web_elements)

```typescript
import { html, renderToString } from "https://deno.land/x/voks/mod.ts";
import {
  body,
  h1,
  head,
  htmlElement,
} from "https://deno.land/x/voks_web_elements";

// deno-fmt-ignore
const template = htmlElement(html`
  ${head()}
  ${body(html`
    ${h1("Hello World!", { attributes: { class: "title" } })}
  `)}
`)

await renderToString(template);
```

## [npm](https://www.npmjs.com/package/@voks/voks-web-elements)

```shell
npm i @voks/voks
npm i @voks/voks-web-elements
```

```javascript
import { html, renderToString } from "@voks/voks";
import { body, h1, head, htmlElement } from "@voks/voks-web-elements";

// deno-fmt-ignore
const template = htmlElement(html`
  ${head()}
  ${body(html`
    ${h1("Hello World!", { attributes: { class: "title" } })}
  `)}
`)

await renderToString(template);
```
