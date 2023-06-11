import { html, HTMLTemplate } from "../deps.ts";
import { attributeList } from "./element_helper.ts";
import { HTMLGlobalAttributes } from "./global_attributes.ts";

export type MenuAttributes = HTMLGlobalAttributes;

export const menu = (
  content: string | HTMLTemplate,
  attributes: MenuAttributes = {},
) => html`<menu ${attributeList<MenuAttributes>(attributes)}>${content}</menu>`;
