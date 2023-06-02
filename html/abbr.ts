import { html, HTMLTemplate } from "../deps.ts";
import { attributeList } from "./element_helper.ts";
import { HTMLGlobalAttributes } from "./global_attributes.ts";

export type AbbrAttributes = HTMLGlobalAttributes;

export interface AbbrElementOptions {
  classes?: string[];
  attributes?: AbbrAttributes;
}

export const abbr = (
  content: string | HTMLTemplate,
  { attributes, classes }: AbbrElementOptions = {},
) =>
  html`<abbr ${
    attributeList<AbbrAttributes>(attributes, classes)
  }>${content}</abbr>`;
