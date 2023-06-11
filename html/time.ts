import { html, HTMLTemplate } from "../deps.ts";
import { attributeList } from "./element_helper.ts";
import { HTMLGlobalAttributes } from "./global_attributes.ts";

export type TimeAttributes = {
  datetime?: string;
} | HTMLGlobalAttributes;

export const time = (
  content: string | HTMLTemplate,
  attributes: TimeAttributes = {},
) => html`<time ${attributeList<TimeAttributes>(attributes)}>${content}</time>`;
