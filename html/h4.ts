import { html, HTMLTemplate } from "../deps.ts";
import { attributeList } from "./element_helper.ts";
import { HTMLGlobalAttributes } from "./global_attributes.ts";

export type H4Attributes = HTMLGlobalAttributes;

export interface H4ElementOptions {
  classes?: string[];
  attributes?: H4Attributes;
}

export const h4 = (
  content: string | HTMLTemplate,
  { attributes, classes }: H4ElementOptions = {},
) =>html`<h4 ${
  attributeList<H4Attributes>(attributes, classes)
}>${content}</h4>`;

  