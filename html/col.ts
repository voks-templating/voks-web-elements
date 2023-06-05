import { html, HTMLTemplate } from "../deps.ts";
import { attributeList } from "./element_helper.ts";
import { HTMLGlobalAttributes } from "./global_attributes.ts";

export type ColAttributes = { span?: number } | HTMLGlobalAttributes;

export interface ColElementOptions {
  classes?: string[];
  attributes?: ColAttributes;
}

export const col = (
  content: string | HTMLTemplate,
  { attributes, classes }: ColElementOptions = {},
) =>
  html`<col ${
    attributeList<ColAttributes>(attributes, classes)
  }>${content}</col>`;
