import { html } from "../deps.ts";
import { attributeList } from "./element_helper.ts";
import { HTMLGlobalAttributes } from "./global_attributes.ts";

export type IAttributes = HTMLGlobalAttributes;

export const i = (
  attributes: IAttributes = {},
) => html`<i ${attributeList<IAttributes>(attributes)} \\>`;
