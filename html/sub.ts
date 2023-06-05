import { html, HTMLTemplate } from "../deps.ts";
import { attributeList } from "./element_helper.ts";
import { HTMLGlobalAttributes } from "./global_attributes.ts";

export type SubAttributes = HTMLGlobalAttributes;

export interface SubElementOptions {
  classes?: string[];
  attributes?: SubAttributes;
}

export const sub = (
  content: string | HTMLTemplate,
  { attributes, classes }: SubElementOptions = {},
) =>
  html`<sub ${
    attributeList<SubAttributes>(attributes, classes)
  }>${content}</sub>`;
