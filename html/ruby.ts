import { html, HTMLTemplate, HTMLTemplateGenerator } from "../deps.ts";
import { attributesAndContentFromArgs } from "../lib/util.ts";
import { attributeList } from "./element_helper.ts";
import { HTMLGlobalAttributes } from "./global_attributes.ts";

export type RubyAttributes = HTMLGlobalAttributes;

export function ruby(
  attributes: RubyAttributes,
  content?: string | HTMLTemplate | (string | HTMLTemplate | HTMLTemplateGenerator)[],
): HTMLTemplateGenerator;

export function ruby(
  content: string | HTMLTemplate,
): HTMLTemplateGenerator;

export function ruby(...args: [unknown, unknown?]) {
  const { content, attributes } = attributesAndContentFromArgs<
    RubyAttributes
  >(...args);
  return html`<ruby ${
    attributeList<RubyAttributes>(attributes)
  }>${content}</ruby>`;
}
