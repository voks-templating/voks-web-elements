import { html, HTMLTemplate } from "../deps.ts";
import { attributeList } from "./element_helper.ts";
import { HTMLGlobalAttributes } from "./global_attributes.ts";

export type H5Attributes = HTMLGlobalAttributes;

export const h5 = (
  content: string | HTMLTemplate,
  attributes: H5Attributes = {},
) => html`<h5 ${attributeList<H5Attributes>(attributes)}>${content}</h5>`;
