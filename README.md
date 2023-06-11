![voks web elements](./docs/voks_elements.svg)

[![deno.land/x version](https://shield.deno.dev/x/voks_web_elements)](https://deno.land/x/voks_web_elements)
[![npm version](https://img.shields.io/npm/v/@voks/voks-web-elements)](https://www.npmjs.com/package/@voks/voks-web-elements)

Voks Web Elements is a list of atomic
[voks](https://github.com/voks-templating/voks) components, reflecting every
standard HTML Element tag as described at the
[MDN](https://developer.mozilla.org/en-US/docs/Web/HTML/Element). It does not
include deprecated (and yet) no experimental tags.

**API Docs**: https://deno.land/x/voks_web_elements/mod.ts

All elements provide an attributes parameter, that is typed to include all
[global HTML attributes](https://developer.mozilla.org/en-US/docs/Web/HTML/Global_attributes)
as well as the specific attributes for each element.

---
NOTE!: please be aware, that attributes are no longer passed via `attributes` sub-property. Instead, they are passed directly to the element function.
---

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
    ${h1("Hello World!", { class: "title" })}
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
    ${h1("Hello World!", { class: "title" })}
  `)}
`)

await renderToString(template);
```

## Development

### Testing

```
deno test
```
