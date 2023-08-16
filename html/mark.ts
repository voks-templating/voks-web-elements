import { html, HTMLTemplate } from "../deps.ts";
import { attributesAndContentFromArgs } from "../lib/util.ts";
import { attributeList } from "./element_helper.ts";
import { HTMLGlobalAttributes } from "./global_attributes.ts";
import { WebElementContent } from "./web_element_content.ts";

export type MarkAttributes = HTMLGlobalAttributes;

export function mark(
  attributes: MarkAttributes,
  content?: WebElementContent,
): HTMLTemplate;

export function mark(
  content?: WebElementContent,
): HTMLTemplate;

export function mark(...args: [unknown, unknown?]) {
  const { content, attributes } = attributesAndContentFromArgs<
    MarkAttributes
  >(...args);
  return html`<mark${
    attributeList<MarkAttributes>(attributes)
  }>${content}</mark>`;
}
