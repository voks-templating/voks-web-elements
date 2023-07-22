import { html, HTMLTemplate, HTMLTemplateGenerator } from "../deps.ts";
import { attributesAndContentFromArgs } from "../lib/util.ts";
import { attributeList } from "./element_helper.ts";
import { HTMLGlobalAttributes } from "./global_attributes.ts";

export type MarkAttributes = HTMLGlobalAttributes;

export function mark(
  attributes: MarkAttributes,
  content?: string | HTMLTemplate | (string | HTMLTemplate | HTMLTemplateGenerator)[],
): HTMLTemplateGenerator;

export function mark(
  content: string | HTMLTemplate,
): HTMLTemplateGenerator;

export function mark(...args: [unknown, unknown?]) {
  const { content, attributes } = attributesAndContentFromArgs<
    MarkAttributes
  >(...args);
  return html`<mark ${
    attributeList<MarkAttributes>(attributes)
  }>${content}</mark>`;
}
