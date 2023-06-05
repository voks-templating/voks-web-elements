import { html, HTMLTemplate } from "../deps.ts";
import { attributeList } from "./element_helper.ts";
import { HTMLGlobalAttributes } from "./global_attributes.ts";

export type CiteAttributes = HTMLGlobalAttributes;

export interface CiteElementOptions {
  classes?: string[];
  attributes?: CiteAttributes;
}

export const cite = (
  content: string | HTMLTemplate,
  { attributes, classes }: CiteElementOptions = {},
) =>html`<cite ${
  attributeList<CiteAttributes>(attributes, classes)
}>${content}</cite>`;

  