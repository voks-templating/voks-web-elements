import { html, HTMLTemplate } from "../deps.ts";
import { attributeList } from "./element_helper.ts";
import { HTMLGlobalAttributes } from "./global_attributes.ts";

export type CaptionAttributes = HTMLGlobalAttributes;

export interface CaptionElementOptions {
  classes?: string[];
  attributes?: CaptionAttributes;
}

export const caption = (
  content: string | HTMLTemplate,
  { attributes, classes }: CaptionElementOptions = {},
) =>
  html`<caption ${
    attributeList<CaptionAttributes>(attributes, classes)
  }>${content}</caption>`;
