import { html, HTMLTemplate } from "../deps.ts";
import { attributeList } from "./element_helper.ts";
import { HTMLGlobalAttributes } from "./global_attributes.ts";

export type TdAttributes = {
  colspan?: number;
  headers?: string;
  rowspan?: number;
} | HTMLGlobalAttributes;

export const td = (
  content: string | HTMLTemplate,
  attributes: TdAttributes = {},
) => html`<td ${attributeList<TdAttributes>(attributes)}>${content}</td>`;
