import { html, HTMLTemplate } from "../deps.ts";
import { attributesAndContentFromArgs } from "../lib/util.ts";
import { attributeList } from "./element_helper.ts";
import { HTMLGlobalAttributes } from "./global_attributes.ts";
import { WebElementContent } from "./web_element_content.ts";

export type SpanAttributes = HTMLGlobalAttributes;

export function span(
  attributes: SpanAttributes,
  content?: WebElementContent,
): HTMLTemplate;

export function span(
  content?: WebElementContent,
): HTMLTemplate;

export function span(...args: [unknown, unknown?]) {
  const { content, attributes } = attributesAndContentFromArgs<
    SpanAttributes
  >(...args);
  return html`<span${
    attributeList<SpanAttributes>(attributes)
  }>${content}</span>`;
}
