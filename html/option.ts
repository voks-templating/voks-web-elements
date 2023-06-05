import { html, HTMLTemplate } from "../deps.ts";
import { attributeList } from "./element_helper.ts";
import { HTMLGlobalAttributes } from "./global_attributes.ts";

export type OptionAttributes = HTMLGlobalAttributes;

export interface OptionElementOptions {
  classes?: string[];
  attributes?: OptionAttributes;
}

export const option = (
  content: string | HTMLTemplate,
  { attributes, classes }: OptionElementOptions = {},
) =>html`<option ${
  attributeList<OptionAttributes>(attributes, classes)
}>${content}</option>`;

  