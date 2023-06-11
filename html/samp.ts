import { html, HTMLTemplate } from "../deps.ts";
import { attributeList } from "./element_helper.ts";
import { HTMLGlobalAttributes } from "./global_attributes.ts";

export type SampAttributes = HTMLGlobalAttributes;

export const samp = (
  content: string | HTMLTemplate,
  attributes: SampAttributes = {},
) => html`<samp ${attributeList<SampAttributes>(attributes)}>${content}</samp>`;
