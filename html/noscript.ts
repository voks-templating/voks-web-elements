import { html, HTMLTemplate } from "../deps.ts";
import { attributeList } from "./element_helper.ts";
import { HTMLGlobalAttributes } from "./global_attributes.ts";

export type NoscriptAttributes = HTMLGlobalAttributes;

export const noscript = (
  content: string | HTMLTemplate,
  attributes: NoscriptAttributes = {},
) =>
  html`<noscript ${
    attributeList<NoscriptAttributes>(attributes)
  }>${content}</noscript>`;
