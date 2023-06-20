import { html, HTMLTemplate, minify } from "../deps.ts";
import { attributeList } from "./element_helper.ts";
import { HTMLGlobalAttributes } from "./global_attributes.ts";

export type TfootAttributes = HTMLGlobalAttributes;

export const tfoot = (
  content: string | HTMLTemplate,
  attributes: TfootAttributes = {},
) =>
  html`<tfoot ${attributeList<TfootAttributes>(attributes)}>${content}</tfoot>`;
