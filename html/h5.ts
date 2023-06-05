import { html, HTMLTemplate } from "../deps.ts";
import { attributeList } from "./element_helper.ts";
import { HTMLGlobalAttributes } from "./global_attributes.ts";

export type H5Attributes = HTMLGlobalAttributes;

export interface H5ElementOptions {
  classes?: string[];
  attributes?: H5Attributes;
}

export const h5 = (
  content: string | HTMLTemplate,
  { attributes, classes }: H5ElementOptions = {},
) =>
  html`<h5 ${attributeList<H5Attributes>(attributes, classes)}>${content}</h5>`;
