import { html, HTMLTemplate, HTMLTemplateGenerator } from "../deps.ts";
import { attributesAndContentFromArgs } from "../lib/util.ts";
import { attributeList } from "./element_helper.ts";
import { HTMLGlobalAttributes } from "./global_attributes.ts";

export type H5Attributes = HTMLGlobalAttributes;

export function h5(
  attributes: H5Attributes,
  content?:
    | string
    | HTMLTemplate
    | (string | HTMLTemplate | HTMLTemplateGenerator)[],
): HTMLTemplateGenerator;

export function h5(
  content?:
    | string
    | HTMLTemplate
    | (string | HTMLTemplate | HTMLTemplateGenerator)[],
): HTMLTemplateGenerator;

export function h5(...args: [unknown, unknown?]) {
  const { content, attributes } = attributesAndContentFromArgs<
    H5Attributes
  >(...args);
  return html`<h5 ${attributeList<H5Attributes>(attributes)}>${content}</h5>`;
}
