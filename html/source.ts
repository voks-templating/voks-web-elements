import { html, HTMLTemplate } from "../deps.ts";
import { attributeList } from "./element_helper.ts";
import { HTMLGlobalAttributes } from "./global_attributes.ts";

export type SourceAttributes = HTMLGlobalAttributes;

export interface SourceElementOptions {
  classes?: string[];
  attributes?: SourceAttributes;
}

export const source = (
  content: string | HTMLTemplate,
  { attributes, classes }: SourceElementOptions = {},
) =>
  html`<source ${
    attributeList<SourceAttributes>(attributes, classes)
  }>${content}</source>`;
