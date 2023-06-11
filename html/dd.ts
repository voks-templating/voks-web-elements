import { html, HTMLTemplate } from "../deps.ts";
import { attributeList } from "./element_helper.ts";
import { HTMLGlobalAttributes } from "./global_attributes.ts";

export type DdAttributes = HTMLGlobalAttributes;

export const dd = (
  content: string | HTMLTemplate,
  attributes: DdAttributes = {},
) => html`<dd ${attributeList<DdAttributes>(attributes)}>${content}</dd>`;
