import { html, HTMLTemplate } from "../deps.ts";
import { attributeList } from "./element_helper.ts";
import { HTMLGlobalAttributes } from "./global_attributes.ts";

export type InsAttributes = {
  cite?: string;
  datetime?: string;
} | HTMLGlobalAttributes;

export const ins = (
  content: string | HTMLTemplate,
  attributes: InsAttributes = {},
) => html`<ins ${attributeList<InsAttributes>(attributes)}>${content}</ins>`;
