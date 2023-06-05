import { html, HTMLTemplate } from "../deps.ts";
import { attributeList } from "./element_helper.ts";
import { HTMLGlobalAttributes } from "./global_attributes.ts";

export type EmbedAttributes = HTMLGlobalAttributes;

export interface EmbedElementOptions {
  classes?: string[];
  attributes?: EmbedAttributes;
}

export const embed = (
  content: string | HTMLTemplate,
  { attributes, classes }: EmbedElementOptions = {},
) =>
  html`<embed ${
    attributeList<EmbedAttributes>(attributes, classes)
  }>${content}</embed>`;
