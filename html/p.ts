import { html, HTMLTemplate } from "../deps.ts";
import { attributeList } from "./element_helper.ts";
import { HTMLGlobalAttributes } from "./global_attributes.ts";

export type PAttributes = HTMLGlobalAttributes;

export const p = (
  content: string | HTMLTemplate,
  attributes: PAttributes = {},
) => html`<p ${attributeList<PAttributes>(attributes)}>${content}</p>`;
