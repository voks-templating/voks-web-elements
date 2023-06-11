import { html, HTMLTemplate } from "../deps.ts";
import { attributeList } from "./element_helper.ts";
import { HTMLGlobalAttributes } from "./global_attributes.ts";

export type BdoAttributes = HTMLGlobalAttributes;

export const bdo = (
  content: string | HTMLTemplate,
  attributes: BdoAttributes = {},
) => html`<bdo ${attributeList<BdoAttributes>(attributes)}>${content}</bdo>`;
