import { html, HTMLTemplate } from "../deps.ts";
import { attributeList } from "./element_helper.ts";
import { HTMLGlobalAttributes } from "./global_attributes.ts";

export type BAttributes = HTMLGlobalAttributes;

export const b = (
  content: string | HTMLTemplate,
  attributes: BAttributes = {},
) => html`<b ${attributeList<BAttributes>(attributes)}>${content}</b>`;
