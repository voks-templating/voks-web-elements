import { html, HTMLTemplate } from "../deps.ts";
import { attributeList } from "./element_helper.ts";
import { HTMLGlobalAttributes } from "./global_attributes.ts";

export type DelAttributes = {
  cite?: string;
  datetime?: string;
} | HTMLGlobalAttributes;

export const del = (
  content: string | HTMLTemplate,
  attributes: DelAttributes = {},
) => html`<del ${attributeList<DelAttributes>(attributes)}>${content}</del>`;
