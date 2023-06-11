import { html, HTMLTemplate } from "../deps.ts";
import { attributeList } from "./element_helper.ts";
import { HTMLGlobalAttributes } from "./global_attributes.ts";

export type MarkAttributes = HTMLGlobalAttributes;

export const mark = (
  content: string | HTMLTemplate,
  attributes: MarkAttributes = {},
) => html`<mark ${attributeList<MarkAttributes>(attributes)}>${content}</mark>`;
