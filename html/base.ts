import { html } from "../deps.ts";
import { attributeList } from "./element_helper.ts";
import { HTMLGlobalAttributes } from "./global_attributes.ts";

export type BaseAttributes = {
  href?: string;
  target?: string;
} | HTMLGlobalAttributes;

export const base = (
  attributes: BaseAttributes = {},
) => html`<base ${attributeList<BaseAttributes>(attributes)} />`;
