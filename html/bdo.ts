import { html, HTMLTemplate } from "../deps.ts";
import { attributeList } from "./element_helper.ts";
import { HTMLGlobalAttributes } from "./global_attributes.ts";

export type BdoAttributes = HTMLGlobalAttributes;

export interface BdoElementOptions {
  classes?: string[];
  attributes?: BdoAttributes;
}

export const bdo = (
  content: string | HTMLTemplate,
  { attributes, classes }: BdoElementOptions = {},
) =>
  html`<bdo ${
    attributeList<BdoAttributes>(attributes, classes)
  }>${content}</bdo>`;
