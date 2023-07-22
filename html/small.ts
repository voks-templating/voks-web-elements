import { html, HTMLTemplate, HTMLTemplateGenerator } from "../deps.ts";
import { attributesAndContentFromArgs } from "../lib/util.ts";
import { attributeList } from "./element_helper.ts";
import { HTMLGlobalAttributes } from "./global_attributes.ts";

export type SmallAttributes = HTMLGlobalAttributes;

export function small(
  attributes: SmallAttributes,
  content?: string | HTMLTemplate | (string | HTMLTemplate | HTMLTemplateGenerator)[],
): HTMLTemplateGenerator;

export function small(
  content: string | HTMLTemplate,
): HTMLTemplateGenerator;

export function small(...args: [unknown, unknown?]) {
  const { content, attributes } = attributesAndContentFromArgs<
    SmallAttributes
  >(...args);
  return html`<small ${
    attributeList<SmallAttributes>(attributes)
  }>${content}</small>`;
}
