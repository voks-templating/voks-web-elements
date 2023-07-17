import { html, HTMLTemplate, HTMLTemplateGenerator } from "../deps.ts";
import { attributesAndContentFromArgs } from "../lib/util.ts";
import { attributeList } from "./element_helper.ts";
import { HTMLGlobalAttributes } from "./global_attributes.ts";

export type SpanAttributes = HTMLGlobalAttributes;

export function span(
  attributes: SpanAttributes,
  content?: string | HTMLTemplate,
): HTMLTemplateGenerator;

export function span(
  content: string | HTMLTemplate,
): HTMLTemplateGenerator;

export function span(...args: [unknown, unknown?]) {
  const { content, attributes } = attributesAndContentFromArgs<
    SpanAttributes
  >(...args);
  return html`<span ${
    attributeList<SpanAttributes>(attributes)
  }>${content}</span>`;
}
