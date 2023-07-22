import { html, HTMLTemplate, HTMLTemplateGenerator } from "../deps.ts";
import { attributesAndContentFromArgs } from "../lib/util.ts";
import { attributeList } from "./element_helper.ts";
import { HTMLGlobalAttributes } from "./global_attributes.ts";

export type AbbrAttributes = HTMLGlobalAttributes;

export function abbr(
  attributes: AbbrAttributes,
  content?:
    | string
    | HTMLTemplate
    | (string | HTMLTemplate | HTMLTemplateGenerator)[],
): HTMLTemplateGenerator;

export function abbr(
  content?:
    | string
    | HTMLTemplate
    | (string | HTMLTemplate | HTMLTemplateGenerator)[],
): HTMLTemplateGenerator;

export function abbr(...args: [unknown, unknown?]) {
  const { content, attributes } = attributesAndContentFromArgs<
    AbbrAttributes
  >(...args);
  return html`<abbr ${
    attributeList<AbbrAttributes>(attributes)
  }>${content}</abbr>`;
}
