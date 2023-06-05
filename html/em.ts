import { html, HTMLTemplate } from "../deps.ts";
import { attributeList } from "./element_helper.ts";
import { HTMLGlobalAttributes } from "./global_attributes.ts";

export type EmAttributes = HTMLGlobalAttributes;

export interface EmElementOptions {
  classes?: string[];
  attributes?: EmAttributes;
}

export const em = (
  content: string | HTMLTemplate,
  { attributes, classes }: EmElementOptions = {},
) =>html`<em ${
  attributeList<EmAttributes>(attributes, classes)
}>${content}</em>`;

  