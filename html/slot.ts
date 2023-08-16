import { html, HTMLTemplate } from "../deps.ts";
import { attributesAndContentFromArgs } from "../lib/util.ts";
import { attributeList } from "./element_helper.ts";
import { HTMLGlobalAttributes } from "./global_attributes.ts";
import { WebElementContent } from "./web_element_content.ts";

export type SlotAttributes = { name?: string } & HTMLGlobalAttributes;

export function slot(
  attributes: SlotAttributes,
  content?: WebElementContent,
): HTMLTemplate;

export function slot(
  content?: WebElementContent,
): HTMLTemplate;

export function slot(...args: [unknown, unknown?]) {
  const { content, attributes } = attributesAndContentFromArgs<
    SlotAttributes
  >(...args);
  return html`<slot${
    attributeList<SlotAttributes>(attributes)
  }>${content}</slot>`;
}
