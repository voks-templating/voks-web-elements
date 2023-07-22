import { html, HTMLTemplate, HTMLTemplateGenerator } from "../deps.ts";
import { attributesAndContentFromArgs } from "../lib/util.ts";
import { attributeList } from "./element_helper.ts";
import { HTMLGlobalAttributes } from "./global_attributes.ts";

export type TrAttributes = HTMLGlobalAttributes;

export function tr(
  attributes: TrAttributes,
  content?:
    | string
    | HTMLTemplate
    | (string | HTMLTemplate | HTMLTemplateGenerator)[],
): HTMLTemplateGenerator;

export function tr(
  content?:
    | string
    | HTMLTemplate
    | (string | HTMLTemplate | HTMLTemplateGenerator)[],
): HTMLTemplateGenerator;

export function tr(...args: [unknown, unknown?]) {
  const { content, attributes } = attributesAndContentFromArgs<
    TrAttributes
  >(...args);
  return html`<tr ${attributeList<TrAttributes>(attributes)}>${content}</tr>`;
}
