import { html, HTMLTemplate } from "../deps.ts";
import { attributeList } from "./element_helper.ts";
import { HTMLGlobalAttributes } from "./global_attributes.ts";

export type UAttributes = HTMLGlobalAttributes;

export const u = (
  content: string | HTMLTemplate,
  attributes: UAttributes = {},
) => html`<u ${attributeList<UAttributes>(attributes)}>${content}</u>`;
