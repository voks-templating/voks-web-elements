import { html, HTMLTemplate } from "../deps.ts";
import { attributeList } from "./element_helper.ts";
import { HTMLGlobalAttributes } from "./global_attributes.ts";

export type LabelAttributes = {
  for?: string;
} | HTMLGlobalAttributes;

export const label = (
  content: string | HTMLTemplate,
  attributes: LabelAttributes = {},
) =>
  html`<label ${attributeList<LabelAttributes>(attributes)}>${content}</label>`;
