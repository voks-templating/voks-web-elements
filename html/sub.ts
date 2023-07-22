import { html, HTMLTemplate, HTMLTemplateGenerator } from "../deps.ts";
import { attributesAndContentFromArgs } from "../lib/util.ts";
import { attributeList } from "./element_helper.ts";
import { HTMLGlobalAttributes } from "./global_attributes.ts";

export type SubAttributes = HTMLGlobalAttributes;

export function sub(
  attributes: SubAttributes,
  content?:
    | string
    | HTMLTemplate
    | (string | HTMLTemplate | HTMLTemplateGenerator)[],
): HTMLTemplateGenerator;

export function sub(
  content?:
    | string
    | HTMLTemplate
    | (string | HTMLTemplate | HTMLTemplateGenerator)[],
): HTMLTemplateGenerator;

export function sub(...args: [unknown, unknown?]) {
  const { content, attributes } = attributesAndContentFromArgs<
    SubAttributes
  >(...args);
  return html`<sub ${
    attributeList<SubAttributes>(attributes)
  }>${content}</sub>`;
}
