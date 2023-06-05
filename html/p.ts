import { html, HTMLTemplate } from "../deps.ts";
import { attributeList } from "./element_helper.ts";
import { HTMLGlobalAttributes } from "./global_attributes.ts";

export type PAttributes = HTMLGlobalAttributes;

export interface PElementOptions {
  classes?: string[];
  attributes?: PAttributes;
}

export const p = (
  content: string | HTMLTemplate,
  { attributes, classes }: PElementOptions = {},
) =>html`<p ${
  attributeList<PAttributes>(attributes, classes)
}>${content}</p>`;

  