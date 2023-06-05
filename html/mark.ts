import { html, HTMLTemplate } from "../deps.ts";
import { attributeList } from "./element_helper.ts";
import { HTMLGlobalAttributes } from "./global_attributes.ts";

export type MarkAttributes = HTMLGlobalAttributes;

export interface MarkElementOptions {
  classes?: string[];
  attributes?: MarkAttributes;
}

export const mark = (
  content: string | HTMLTemplate,
  { attributes, classes }: MarkElementOptions = {},
) =>html`<mark ${
  attributeList<MarkAttributes>(attributes, classes)
}>${content}</mark>`;

  