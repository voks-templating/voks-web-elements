import { html, HTMLTemplate } from "../deps.ts";
import { attributeList } from "./element_helper.ts";
import { HTMLGlobalAttributes } from "./global_attributes.ts";

export type WbrAttributes = HTMLGlobalAttributes;

export const wbr = (
  content: string | HTMLTemplate,
  attributes: WbrAttributes = {},
) => html`<wbr ${attributeList<WbrAttributes>(attributes)}>${content}</wbr>`;
