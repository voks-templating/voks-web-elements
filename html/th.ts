import { html, HTMLTemplate } from "../deps.ts";
import { attributeList } from "./element_helper.ts";
import { HTMLGlobalAttributes } from "./global_attributes.ts";

export type ThAttributes = {
  abbr?: string;
  colspan?: number;
  headers?: string;
  rowspan?: number;
  scope?: string;
} | HTMLGlobalAttributes;

export const th = (
  content: string | HTMLTemplate,
  attributes: ThAttributes = {},
) => html`<th ${attributeList<ThAttributes>(attributes)}>${content}</th>`;
