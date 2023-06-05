import { html, HTMLTemplate } from "../deps.ts";
import { attributeList } from "./element_helper.ts";
import { HTMLGlobalAttributes } from "./global_attributes.ts";

export type SmallAttributes = HTMLGlobalAttributes;

export interface SmallElementOptions {
  classes?: string[];
  attributes?: SmallAttributes;
}

export const small = (
  content: string | HTMLTemplate,
  { attributes, classes }: SmallElementOptions = {},
) =>html`<small ${
  attributeList<SmallAttributes>(attributes, classes)
}>${content}</small>`;

  