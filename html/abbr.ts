import { html, HTMLTemplate } from "../deps.ts";
import { attributeList } from "./element_helper.ts";
import { HTMLGlobalAttributes } from "./global_attributes.ts";

export type AbbrAttributes = HTMLGlobalAttributes;

export const abbr = (
  content: string | HTMLTemplate,
  attributes: AbbrAttributes = {},
) => html`<abbr ${attributeList<AbbrAttributes>(attributes)}>${content}</abbr>`;
