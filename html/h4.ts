import { html, HTMLTemplate } from "../deps.ts";
import { attributeList } from "./element_helper.ts";
import { HTMLGlobalAttributes } from "./global_attributes.ts";

export type H4Attributes = HTMLGlobalAttributes;

export const h4 = (
  content: string | HTMLTemplate,
  attributes: H4Attributes = {},
) => html`<h4 ${attributeList<H4Attributes>(attributes)}>${content}</h4>`;
