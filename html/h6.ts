import { html, HTMLTemplate } from "../deps.ts";
import { attributeList } from "./element_helper.ts";
import { HTMLGlobalAttributes } from "./global_attributes.ts";

export type H6Attributes = HTMLGlobalAttributes;

export interface H6ElementOptions {
  classes?: string[];
  attributes?: H6Attributes;
}

export const h6 = (
  content: string | HTMLTemplate,
  { attributes, classes }: H6ElementOptions = {},
) =>
  html`<h6 ${attributeList<H6Attributes>(attributes, classes)}>${content}</h6>`;
