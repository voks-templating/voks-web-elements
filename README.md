![voks web elements](./docs/voks_elements.svg)

[![deno.land/x version](https://shield.deno.dev/x/voks_web_elements)](https://deno.land/x/voks_web_elements)
[![npm version](https://img.shields.io/npm/v/@voks/voks-web-elements)](https://www.npmjs.com/package/@voks/voks-web-elements)

Voks Web Elements is a list of atomic
[voks](https://github.com/voks-templating/voks) components, reflecting every
standard HTML Element tag as described at the
[MDN](https://developer.mozilla.org/en-US/docs/Web/HTML/Element). It does not
include deprecated (and yet) no experimental tags.

## Release History

https://github.com/voks-templating/voks-web-elements/releases

## API

https://deno.land/x/voks_web_elements/mod.ts

## Attributes

All elements provide an attributes parameter, that is typed to include all
[global HTML attributes](https://developer.mozilla.org/en-US/docs/Web/HTML/Global_attributes)
as well as the specific attributes for each element. Also data-* attributes (in
the form of `dataXyz: true` or `"data-xyz": true`) and aria-* attributes (also
in kebap and camel case) are supported.

If a dom element is allowed to have content the attributes run as first
parameter, whereas the content can be passed as second parameter.

If no attributes are present the attributes param can be skipped and the content
can be passed instead.

## Usage

### [Deno](https://deno.land/x/voks_web_elements)

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
    ${h1({ class: "title" }, "Hello World!")}
  `)}
`)

await renderToString(template);
```

### [npm](https://www.npmjs.com/package/@voks/voks-web-elements)

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
    ${h1({ class: "title" }, "Hello World!")}
  `)}
`)

await renderToString(template);
```

## Development

### Testing

```
deno test
```

## License

[Apache-2.0](./LICENSE)
