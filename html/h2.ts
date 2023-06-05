import { html, HTMLTemplate } from "../deps.ts";
import { attributeList } from "./element_helper.ts";
import { HTMLGlobalAttributes } from "./global_attributes.ts";

export type H2Attributes = HTMLGlobalAttributes;

export interface H2ElementOptions {
  classes?: string[];
  attributes?: H2Attributes;
}

export const h2 = (
  content: string | HTMLTemplate,
  { attributes, classes }: H2ElementOptions = {},
) =>html`<h2 ${
  attributeList<H2Attributes>(attributes, classes)
}>${content}</h2>`;

  