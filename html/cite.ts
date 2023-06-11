import { html, HTMLTemplate } from "../deps.ts";
import { attributeList } from "./element_helper.ts";
import { HTMLGlobalAttributes } from "./global_attributes.ts";

export type CiteAttributes = HTMLGlobalAttributes;

export const cite = (
  content: string | HTMLTemplate,
  attributes: CiteAttributes = {},
) => html`<cite ${attributeList<CiteAttributes>(attributes)}>${content}</cite>`;
