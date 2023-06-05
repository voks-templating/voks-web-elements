import { html, HTMLTemplate } from "../deps.ts";
import { attributeList } from "./element_helper.ts";
import { HTMLGlobalAttributes } from "./global_attributes.ts";

export type ColgroupAttributes = { span?: number } | HTMLGlobalAttributes;

export interface ColgroupElementOptions {
  classes?: string[];
  attributes?: ColgroupAttributes;
}

export const colgroup = (
  content: string | HTMLTemplate,
  { attributes, classes }: ColgroupElementOptions = {},
) =>
  html`<colgroup ${
    attributeList<ColgroupAttributes>(attributes, classes)
  }>${content}</colgroup>`;
