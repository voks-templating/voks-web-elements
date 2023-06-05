import { html, HTMLTemplate } from "../deps.ts";
import { attributeList } from "./element_helper.ts";
import { HTMLGlobalAttributes } from "./global_attributes.ts";

export type MenuAttributes = HTMLGlobalAttributes;

export interface MenuElementOptions {
  classes?: string[];
  attributes?: MenuAttributes;
}

export const menu = (
  content: string | HTMLTemplate,
  { attributes, classes }: MenuElementOptions = {},
) =>html`<menu ${
  attributeList<MenuAttributes>(attributes, classes)
}>${content}</menu>`;

  