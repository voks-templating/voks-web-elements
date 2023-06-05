import { html, HTMLTemplate } from "../deps.ts";
import { attributeList } from "./element_helper.ts";
import { HTMLGlobalAttributes } from "./global_attributes.ts";

export type FigcaptionAttributes = HTMLGlobalAttributes;

export interface FigcaptionElementOptions {
  classes?: string[];
  attributes?: FigcaptionAttributes;
}

export const figcaption = (
  content: string | HTMLTemplate,
  { attributes, classes }: FigcaptionElementOptions = {},
) =>
  html`<figcaption ${
    attributeList<FigcaptionAttributes>(attributes, classes)
  }>${content}</figcaption>`;
