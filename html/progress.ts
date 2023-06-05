import { html, HTMLTemplate } from "../deps.ts";
import { attributeList } from "./element_helper.ts";
import { HTMLGlobalAttributes } from "./global_attributes.ts";

export type ProgressAttributes = HTMLGlobalAttributes;

export interface ProgressElementOptions {
  classes?: string[];
  attributes?: ProgressAttributes;
}

export const progress = (
  content: string | HTMLTemplate,
  { attributes, classes }: ProgressElementOptions = {},
) =>html`<progress ${
  attributeList<ProgressAttributes>(attributes, classes)
}>${content}</progress>`;

  