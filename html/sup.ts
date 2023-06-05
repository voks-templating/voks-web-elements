import { html, HTMLTemplate } from "../deps.ts";
import { attributeList } from "./element_helper.ts";
import { HTMLGlobalAttributes } from "./global_attributes.ts";

export type SupAttributes = HTMLGlobalAttributes;

export interface SupElementOptions {
  classes?: string[];
  attributes?: SupAttributes;
}

export const sup = (
  content: string | HTMLTemplate,
  { attributes, classes }: SupElementOptions = {},
) =>html`<sup ${
  attributeList<SupAttributes>(attributes, classes)
}>${content}</sup>`;

  