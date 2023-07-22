import { html, HTMLTemplate, HTMLTemplateGenerator } from "../deps.ts";
import { attributesAndContentFromArgs } from "../lib/util.ts";
import { attributeList } from "./element_helper.ts";
import { HTMLGlobalAttributes } from "./global_attributes.ts";

export type H6Attributes = HTMLGlobalAttributes;

export function h6(
  attributes: H6Attributes,
  content?:
    | string
    | HTMLTemplate
    | (string | HTMLTemplate | HTMLTemplateGenerator)[],
): HTMLTemplateGenerator;

export function h6(
  content: string | HTMLTemplate,
): HTMLTemplateGenerator;

export function h6(...args: [unknown, unknown?]) {
  const { content, attributes } = attributesAndContentFromArgs<
    H6Attributes
  >(...args);
  return html`<h6 ${attributeList<H6Attributes>(attributes)}>${content}</h6>`;
}
