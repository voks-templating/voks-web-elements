import { html, HTMLTemplate } from "../deps.ts";
import { attributeList } from "./element_helper.ts";
import { HTMLGlobalAttributes } from "./global_attributes.ts";

export type H1Attributes = HTMLGlobalAttributes;

export interface H1ElementOptions {
  classes?: string[];
  attributes?: H1Attributes;
}

export const h1 = (
  content: string | HTMLTemplate,
  { attributes, classes }: H1ElementOptions = {},
) =>html`<h1 ${
  attributeList<H1Attributes>(attributes, classes)
}>${content}</h1>`;

  