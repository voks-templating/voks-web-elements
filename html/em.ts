import { html, HTMLTemplate } from "../deps.ts";
import { attributeList } from "./element_helper.ts";
import { HTMLGlobalAttributes } from "./global_attributes.ts";

export type EmAttributes = HTMLGlobalAttributes;

export const em = (
  content: string | HTMLTemplate,
  attributes: EmAttributes = {},
) => html`<em ${attributeList<EmAttributes>(attributes)}>${content}</em>`;
