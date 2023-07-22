import { html, HTMLTemplate, HTMLTemplateGenerator } from "../deps.ts";
import { attributesAndContentFromArgs } from "../lib/util.ts";
import { attributeList } from "./element_helper.ts";
import { HTMLGlobalAttributes } from "./global_attributes.ts";

export type H4Attributes = HTMLGlobalAttributes;

export function h4(
  attributes: H4Attributes,
  content?:
    | string
    | HTMLTemplate
    | (string | HTMLTemplate | HTMLTemplateGenerator)[],
): HTMLTemplateGenerator;

export function h4(
  content:
    | string
    | HTMLTemplate
    | (string | HTMLTemplate | HTMLTemplateGenerator)[],
): HTMLTemplateGenerator;

export function h4(...args: [unknown, unknown?]) {
  const { content, attributes } = attributesAndContentFromArgs<
    H4Attributes
  >(...args);
  return html`<h4 ${attributeList<H4Attributes>(attributes)}>${content}</h4>`;
}
