import { html, HTMLTemplate, HTMLTemplateGenerator } from "../deps.ts";
import { attributesAndContentFromArgs } from "../lib/util.ts";
import { attributeList } from "./element_helper.ts";
import { HTMLGlobalAttributes } from "./global_attributes.ts";

export type TdAttributes = {
  colspan?: number;
  headers?: string;
  rowspan?: number;
} | HTMLGlobalAttributes;

export function td(
  attributes: TdAttributes,
  content?:
    | string
    | HTMLTemplate
    | (string | HTMLTemplate | HTMLTemplateGenerator)[],
): HTMLTemplateGenerator;

export function td(
  content?:
    | string
    | HTMLTemplate
    | (string | HTMLTemplate | HTMLTemplateGenerator)[],
): HTMLTemplateGenerator;

export function td(...args: [unknown, unknown?]) {
  const { content, attributes } = attributesAndContentFromArgs<
    TdAttributes
  >(...args);
  return html`<td ${attributeList<TdAttributes>(attributes)}>${content}</td>`;
}
