import { html, HTMLTemplate, minify } from "../deps.ts";
import { attributeList } from "./element_helper.ts";
import { HTMLGlobalAttributes } from "./global_attributes.ts";

export type SlotAttributes = { name?: string } | HTMLGlobalAttributes;

export const slot = (
  content: string | HTMLTemplate,
  attributes: SlotAttributes = {},
) => html`<slot ${attributeList<SlotAttributes>(attributes)}>${content}</slot>`;
