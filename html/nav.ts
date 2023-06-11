import { html, HTMLTemplate } from "../deps.ts";
import { attributeList } from "./element_helper.ts";
import { HTMLGlobalAttributes } from "./global_attributes.ts";

export type NavAttributes = HTMLGlobalAttributes;

export const nav = (
  content: string | HTMLTemplate,
  attributes: NavAttributes = {},
) => html`<nav ${attributeList<NavAttributes>(attributes)}>${content}</nav>`;
