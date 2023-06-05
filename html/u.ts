import { html, HTMLTemplate } from "../deps.ts";
import { attributeList } from "./element_helper.ts";
import { HTMLGlobalAttributes } from "./global_attributes.ts";

export type UAttributes = HTMLGlobalAttributes;

export interface UElementOptions {
  classes?: string[];
  attributes?: UAttributes;
}

export const u = (
  content: string | HTMLTemplate,
  { attributes, classes }: UElementOptions = {},
) => html`<u ${attributeList<UAttributes>(attributes, classes)}>${content}</u>`;
