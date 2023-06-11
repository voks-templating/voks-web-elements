import { html, HTMLTemplate } from "../deps.ts";
import { attributeList } from "./element_helper.ts";
import { HTMLGlobalAttributes } from "./global_attributes.ts";

export type RpAttributes = HTMLGlobalAttributes;

export const rp = (
  content: string | HTMLTemplate,
  attributes: RpAttributes = {},
) => html`<rp ${attributeList<RpAttributes>(attributes)}>${content}</rp>`;
