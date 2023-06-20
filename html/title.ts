import { html, minify, HTMLTemplate } from "../deps.ts";
import { attributeList } from "./element_helper.ts";
import { HTMLGlobalAttributes } from "./global_attributes.ts";

export type TitleAttributes = HTMLGlobalAttributes;

export const title = (
  content: string | HTMLTemplate,
  attributes: TitleAttributes = {},
) =>
  html`<title ${attributeList<TitleAttributes>(attributes)}>${content}</title>`;
