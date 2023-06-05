import { html, HTMLTemplate } from "../deps.ts";
import { attributeList } from "./element_helper.ts";
import { HTMLGlobalAttributes } from "./global_attributes.ts";

export type LabelAttributes = HTMLGlobalAttributes;

export interface LabelElementOptions {
  classes?: string[];
  attributes?: LabelAttributes;
}

export const label = (
  content: string | HTMLTemplate,
  { attributes, classes }: LabelElementOptions = {},
) =>html`<label ${
  attributeList<LabelAttributes>(attributes, classes)
}>${content}</label>`;

  