import { html, HTMLTemplate, HTMLTemplateGenerator } from "../deps.ts";
import { attributesAndContentFromArgs } from "../lib/util.ts";
import { attributeList } from "./element_helper.ts";
import { HTMLGlobalAttributes } from "./global_attributes.ts";

export type SlotAttributes = { name?: string } | HTMLGlobalAttributes;

export function slot(
  attributes: SlotAttributes,
  content?:
    | string
    | HTMLTemplate
    | (string | HTMLTemplate | HTMLTemplateGenerator)[],
): HTMLTemplateGenerator;

export function slot(
  content: string | HTMLTemplate,
): HTMLTemplateGenerator;

export function slot(...args: [unknown, unknown?]) {
  const { content, attributes } = attributesAndContentFromArgs<
    SlotAttributes
  >(...args);
  return html`<slot ${
    attributeList<SlotAttributes>(attributes)
  }>${content}</slot>`;
}
