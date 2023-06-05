import { html, HTMLTemplate } from "../deps.ts";
import { attributeList } from "./element_helper.ts";
import { HTMLGlobalAttributes } from "./global_attributes.ts";

export type StrongAttributes = HTMLGlobalAttributes;

export interface StrongElementOptions {
  classes?: string[];
  attributes?: StrongAttributes;
}

export const strong = (
  content: string | HTMLTemplate,
  { attributes, classes }: StrongElementOptions = {},
) =>html`<strong ${
  attributeList<StrongAttributes>(attributes, classes)
}>${content}</strong>`;

  