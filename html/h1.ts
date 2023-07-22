import { html, HTMLTemplate, HTMLTemplateGenerator } from "../deps.ts";
import { attributesAndContentFromArgs } from "../lib/util.ts";
import { attributeList } from "./element_helper.ts";
import { HTMLGlobalAttributes } from "./global_attributes.ts";

export type H1Attributes = HTMLGlobalAttributes;

export function h1(
  attributes: H1Attributes,
  content?:
    | string
    | HTMLTemplate
    | (string | HTMLTemplate | HTMLTemplateGenerator)[],
): HTMLTemplateGenerator;

export function h1(
  content: string | HTMLTemplate,
): HTMLTemplateGenerator;

export function h1(...args: [unknown, unknown?]) {
  const { content, attributes } = attributesAndContentFromArgs<
    H1Attributes
  >(...args);
  return html`<h1 ${attributeList<H1Attributes>(attributes)}>${content}</h1>`;
}
