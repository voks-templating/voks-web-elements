import { html, HTMLTemplate } from "../deps.ts";
import { attributeList } from "./element_helper.ts";
import { HTMLGlobalAttributes } from "./global_attributes.ts";

export type QAttributes = HTMLGlobalAttributes;

export interface QElementOptions {
  classes?: string[];
  attributes?: QAttributes;
}

export const q = (
  content: string | HTMLTemplate,
  { attributes, classes }: QElementOptions = {},
) =>html`<q ${
  attributeList<QAttributes>(attributes, classes)
}>${content}</q>`;

  