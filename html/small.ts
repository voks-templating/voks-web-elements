import { html, HTMLTemplate } from "../deps.ts";
import { attributeList } from "./element_helper.ts";
import { HTMLGlobalAttributes } from "./global_attributes.ts";

export type SmallAttributes = HTMLGlobalAttributes;

export const small = (
  content: string | HTMLTemplate,
  attributes: SmallAttributes = {},
) =>
  html`<small ${attributeList<SmallAttributes>(attributes)}>${content}</small>`;
