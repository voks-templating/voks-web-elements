import { html } from "../deps.ts";
import { attributeList } from "./element_helper.ts";
import { HTMLGlobalAttributes } from "./global_attributes.ts";

export type TrAttributes = HTMLGlobalAttributes;

export interface TrElementOptions {
  classes?: string[];
  attributes?: TrAttributes;
}

export const tr = (
  { attributes, classes }: TrElementOptions = {},
) => html`<tr ${attributeList<TrAttributes>(attributes, classes)} \\>`;
