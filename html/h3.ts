import { html, HTMLTemplate, HTMLTemplateGenerator } from "../deps.ts";
import { attributesAndContentFromArgs } from "../lib/util.ts";
import { attributeList } from "./element_helper.ts";
import { HTMLGlobalAttributes } from "./global_attributes.ts";

export type H3Attributes = HTMLGlobalAttributes;

export function h3(
  attributes: H3Attributes,
  content?: string | HTMLTemplate | (string | HTMLTemplate | HTMLTemplateGenerator)[],
): HTMLTemplateGenerator;

export function h3(
  content: string | HTMLTemplate,
): HTMLTemplateGenerator;

export function h3(...args: [unknown, unknown?]) {
  const { content, attributes } = attributesAndContentFromArgs<
    H3Attributes
  >(...args);
  return html`<h3 ${attributeList<H3Attributes>(attributes)}>${content}</h3>`;
}
