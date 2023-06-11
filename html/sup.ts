import { html, HTMLTemplate } from "../deps.ts";
import { attributeList } from "./element_helper.ts";
import { HTMLGlobalAttributes } from "./global_attributes.ts";

export type SupAttributes = HTMLGlobalAttributes;

export const sup = (
  content: string | HTMLTemplate,
  attributes: SupAttributes = {},
) => html`<sup ${attributeList<SupAttributes>(attributes)}>${content}</sup>`;
