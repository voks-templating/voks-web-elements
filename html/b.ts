import { html, HTMLTemplate } from "../deps.ts";
import { attributeList } from "./element_helper.ts";
import { HTMLGlobalAttributes } from "./global_attributes.ts";

export type BAttributes = HTMLGlobalAttributes;

export interface BElementOptions {
  classes?: string[];
  attributes?: BAttributes;
}

export const b = (
  content: string | HTMLTemplate,
  { attributes, classes }: BElementOptions = {},
) =>
  html`<b ${
    attributeList<BAttributes>(attributes, classes)
  }>${content}</b>`;
  