import { html, HTMLTemplate } from "../deps.ts";
import { attributeList } from "./element_helper.ts";
import { HTMLGlobalAttributes } from "./global_attributes.ts";

export type AsideAttributes = HTMLGlobalAttributes;

export const aside = (
  content: string | HTMLTemplate,
  attributes: AsideAttributes = {},
) =>
  html`<aside ${attributeList<AsideAttributes>(attributes)}>${content}</aside>`;
