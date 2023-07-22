import { html, HTMLTemplate, HTMLTemplateGenerator } from "../deps.ts";
import { attributesAndContentFromArgs } from "../lib/util.ts";
import { attributeList } from "./element_helper.ts";
import { HTMLGlobalAttributes } from "./global_attributes.ts";

export type PAttributes = HTMLGlobalAttributes;

export function p(
  attributes: PAttributes,
  content?:
    | string
    | HTMLTemplate
    | (string | HTMLTemplate | HTMLTemplateGenerator)[],
): HTMLTemplateGenerator;

export function p(
  content?:
    | string
    | HTMLTemplate
    | (string | HTMLTemplate | HTMLTemplateGenerator)[],
): HTMLTemplateGenerator;

export function p(...args: [unknown, unknown?]) {
  const { content, attributes } = attributesAndContentFromArgs<
    PAttributes
  >(...args);
  return html`<p ${attributeList<PAttributes>(attributes)}>${content}</p>`;
}
