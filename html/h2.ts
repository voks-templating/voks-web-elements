import { html, HTMLTemplate, HTMLTemplateGenerator } from "../deps.ts";
import { attributesAndContentFromArgs } from "../lib/util.ts";
import { attributeList } from "./element_helper.ts";
import { HTMLGlobalAttributes } from "./global_attributes.ts";

export type H2Attributes = HTMLGlobalAttributes;

export function h2(
  attributes: H2Attributes,
  content?: string | HTMLTemplate | (string | HTMLTemplate | HTMLTemplateGenerator)[],
): HTMLTemplateGenerator;

export function h2(
  content: string | HTMLTemplate,
): HTMLTemplateGenerator;

export function h2(...args: [unknown, unknown?]) {
  const { content, attributes } = attributesAndContentFromArgs<
    H2Attributes
  >(...args);
  return html`<h2 ${attributeList<H2Attributes>(attributes)}>${content}</h2>`;
}
