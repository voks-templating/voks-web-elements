import { html } from "../deps.ts";
import { attributeList } from "./element_helper.ts";
import { HTMLGlobalAttributes } from "./global_attributes.ts";

export type HrAttributes = HTMLGlobalAttributes;

export interface HrElementOptions {
  classes?: string[];
  attributes?: HrAttributes;
}

export const hr = (
  { attributes, classes }: HrElementOptions = {},
) => html`<hr ${attributeList<HrAttributes>(attributes, classes)} \\>`;
