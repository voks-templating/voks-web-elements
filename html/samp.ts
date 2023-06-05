import { html, HTMLTemplate } from "../deps.ts";
import { attributeList } from "./element_helper.ts";
import { HTMLGlobalAttributes } from "./global_attributes.ts";

export type SampAttributes = HTMLGlobalAttributes;

export interface SampElementOptions {
  classes?: string[];
  attributes?: SampAttributes;
}

export const samp = (
  content: string | HTMLTemplate,
  { attributes, classes }: SampElementOptions = {},
) =>html`<samp ${
  attributeList<SampAttributes>(attributes, classes)
}>${content}</samp>`;

  