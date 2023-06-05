import { html, HTMLTemplate } from "../deps.ts";
import { attributeList } from "./element_helper.ts";
import { HTMLGlobalAttributes } from "./global_attributes.ts";

export type OutputAttributes = HTMLGlobalAttributes;

export interface OutputElementOptions {
  classes?: string[];
  attributes?: OutputAttributes;
}

export const output = (
  content: string | HTMLTemplate,
  { attributes, classes }: OutputElementOptions = {},
) =>html`<output ${
  attributeList<OutputAttributes>(attributes, classes)
}>${content}</output>`;

  