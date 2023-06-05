import { html, HTMLTemplate } from "../deps.ts";
import { attributeList } from "./element_helper.ts";
import { HTMLGlobalAttributes } from "./global_attributes.ts";

export type FooterAttributes = HTMLGlobalAttributes;

export interface FooterElementOptions {
  classes?: string[];
  attributes?: FooterAttributes;
}

export const footer = (
  content: string | HTMLTemplate,
  { attributes, classes }: FooterElementOptions = {},
) =>html`<footer ${
  attributeList<FooterAttributes>(attributes, classes)
}>${content}</footer>`;

  