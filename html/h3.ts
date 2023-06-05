import { html, HTMLTemplate } from "../deps.ts";
import { attributeList } from "./element_helper.ts";
import { HTMLGlobalAttributes } from "./global_attributes.ts";

export type H3Attributes = HTMLGlobalAttributes;

export interface H3ElementOptions {
  classes?: string[];
  attributes?: H3Attributes;
}

export const h3 = (
  content: string | HTMLTemplate,
  { attributes, classes }: H3ElementOptions = {},
) =>html`<h3 ${
  attributeList<H3Attributes>(attributes, classes)
}>${content}</h3>`;

  