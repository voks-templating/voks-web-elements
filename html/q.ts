import { html, HTMLTemplate } from "../deps.ts";
import { attributeList } from "./element_helper.ts";
import { HTMLGlobalAttributes } from "./global_attributes.ts";

export type QAttributes = {
  cite?: string;
} | HTMLGlobalAttributes;

export const q = (
  content: string | HTMLTemplate,
  attributes: QAttributes = {},
) => html`<q ${attributeList<QAttributes>(attributes)}>${content}</q>`;
