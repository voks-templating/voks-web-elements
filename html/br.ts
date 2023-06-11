import { html } from "../deps.ts";
import { attributeList } from "./element_helper.ts";
import { HTMLGlobalAttributes } from "./global_attributes.ts";

export type BrAttributes = HTMLGlobalAttributes;

export const br = (
  attributes: BrAttributes = {},
) => html`<br ${attributeList<BrAttributes>(attributes)}>`;
