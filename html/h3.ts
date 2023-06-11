import { html, HTMLTemplate } from "../deps.ts";
import { attributeList } from "./element_helper.ts";
import { HTMLGlobalAttributes } from "./global_attributes.ts";

export type H3Attributes = HTMLGlobalAttributes;

export const h3 = (
  content: string | HTMLTemplate,
  attributes: H3Attributes = {},
) => html`<h3 ${attributeList<H3Attributes>(attributes)}>${content}</h3>`;
