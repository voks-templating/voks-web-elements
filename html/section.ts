import { html, HTMLTemplate } from "../deps.ts";
import { attributeList } from "./element_helper.ts";
import { HTMLGlobalAttributes } from "./global_attributes.ts";

export type SectionAttributes = HTMLGlobalAttributes;

export interface SectionElementOptions {
  classes?: string[];
  attributes?: SectionAttributes;
}

export const section = (
  content: string | HTMLTemplate,
  { attributes, classes }: SectionElementOptions = {},
) =>html`<section ${
  attributeList<SectionAttributes>(attributes, classes)
}>${content}</section>`;

  