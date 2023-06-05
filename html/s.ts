import { html, HTMLTemplate } from "../deps.ts";
import { attributeList } from "./element_helper.ts";
import { HTMLGlobalAttributes } from "./global_attributes.ts";

export type SAttributes = HTMLGlobalAttributes;

export interface SElementOptions {
  classes?: string[];
  attributes?: SAttributes;
}

export const s = (
  content: string | HTMLTemplate,
  { attributes, classes }: SElementOptions = {},
) => html`<s ${attributeList<SAttributes>(attributes, classes)}>${content}</s>`;