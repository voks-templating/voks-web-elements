import { html } from "../deps.ts";
import { attributeList } from "./element_helper.ts";
import { HTMLGlobalAttributes } from "./global_attributes.ts";

export type BrAttributes = HTMLGlobalAttributes;

export interface BrElementOptions {
  classes?: string[];
  attributes?: BrAttributes;
}

export const br = (
  { attributes, classes }: BrElementOptions = {},
) => html`<br ${attributeList<BrAttributes>(attributes, classes)}>`;
