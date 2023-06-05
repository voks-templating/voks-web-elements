import { html, HTMLTemplate } from "../deps.ts";
import { attributeList } from "./element_helper.ts";
import { HTMLGlobalAttributes } from "./global_attributes.ts";

export type NoscriptAttributes = HTMLGlobalAttributes;

export interface NoscriptElementOptions {
  classes?: string[];
  attributes?: NoscriptAttributes;
}

export const noscript = (
  content: string | HTMLTemplate,
  { attributes, classes }: NoscriptElementOptions = {},
) =>html`<noscript ${
  attributeList<NoscriptAttributes>(attributes, classes)
}>${content}</noscript>`;

  