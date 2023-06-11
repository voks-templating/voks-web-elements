import { html, HTMLTemplate } from "../deps.ts";
import { attributeList } from "./element_helper.ts";
import { HTMLGlobalAttributes } from "./global_attributes.ts";

export type H6Attributes = HTMLGlobalAttributes;

export const h6 = (
  content: string | HTMLTemplate,
  attributes: H6Attributes = {},
) => html`<h6 ${attributeList<H6Attributes>(attributes)}>${content}</h6>`;
