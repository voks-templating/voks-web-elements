import { html, HTMLTemplate } from "../deps.ts";
import { attributeList } from "./element_helper.ts";
import { HTMLGlobalAttributes } from "./global_attributes.ts";

export type H1Attributes = HTMLGlobalAttributes;

export const h1 = (
  content: string | HTMLTemplate,
  attributes: H1Attributes = {},
) => html`<h1 ${attributeList<H1Attributes>(attributes)}>${content}</h1>`;
