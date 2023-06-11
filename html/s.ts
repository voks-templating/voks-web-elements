import { html, HTMLTemplate } from "../deps.ts";
import { attributeList } from "./element_helper.ts";
import { HTMLGlobalAttributes } from "./global_attributes.ts";

export type SAttributes = HTMLGlobalAttributes;

export const s = (
  content: string | HTMLTemplate,
  attributes: SAttributes = {},
) => html`<s ${attributeList<SAttributes>(attributes)}>${content}</s>`;
