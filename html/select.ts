import { html, HTMLTemplate } from "../deps.ts";
import { attributeList } from "./element_helper.ts";
import { HTMLGlobalAttributes } from "./global_attributes.ts";

export type SelectAttributes = HTMLGlobalAttributes;

export interface SelectElementOptions {
  classes?: string[];
  attributes?: SelectAttributes;
}

export const select = (
  content: string | HTMLTemplate,
  { attributes, classes }: SelectElementOptions = {},
) =>
  html`<select ${
    attributeList<SelectAttributes>(attributes, classes)
  }>${content}</select>`;
