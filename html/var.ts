import { html, HTMLTemplate } from "../deps.ts";
import { attributeList } from "./element_helper.ts";
import { HTMLGlobalAttributes } from "./global_attributes.ts";

export type VarAttributes = HTMLGlobalAttributes;

export const variable = (
  content: string | HTMLTemplate,
  attributes: VarAttributes = {},
) => html`<var ${attributeList<VarAttributes>(attributes)}>${content}</var>`;
