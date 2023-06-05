import { html, HTMLTemplate } from "../deps.ts";
import { attributeList } from "./element_helper.ts";
import { HTMLGlobalAttributes } from "./global_attributes.ts";

export type ThAttributes = HTMLGlobalAttributes;

export interface ThElementOptions {
  classes?: string[];
  attributes?: ThAttributes;
}

export const th = (
  content: string | HTMLTemplate,
  { attributes, classes }: ThElementOptions = {},
) =>html`<th ${
  attributeList<ThAttributes>(attributes, classes)
}>${content}</th>`;

  