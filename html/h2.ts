import { html, HTMLTemplate } from "../deps.ts";
import { attributeList } from "./element_helper.ts";
import { HTMLGlobalAttributes } from "./global_attributes.ts";

export type H2Attributes = HTMLGlobalAttributes;

export const h2 = (
  content: string | HTMLTemplate,
  attributes: H2Attributes = {},
) => html`<h2 ${attributeList<H2Attributes>(attributes)}>${content}</h2>`;
