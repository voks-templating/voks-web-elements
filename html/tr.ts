import { html } from "../deps.ts";
import { attributeList } from "./element_helper.ts";
import { HTMLGlobalAttributes } from "./global_attributes.ts";

export type TrAttributes = HTMLGlobalAttributes;

export const tr = (
  attributes: TrAttributes = {},
) => html`<tr ${attributeList<TrAttributes>(attributes)} \\>`;
