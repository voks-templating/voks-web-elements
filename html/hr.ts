import { html } from "../deps.ts";
import { attributeList } from "./element_helper.ts";
import { HTMLGlobalAttributes } from "./global_attributes.ts";

export type HrAttributes = HTMLGlobalAttributes;

export const hr = (
  attributes: HrAttributes = {},
) => html`<hr${attributeList<HrAttributes>(attributes)} \\>`;
