import { html, HTMLTemplate } from "../deps.ts";
import { attributesAndContentFromArgs } from "../lib/util.ts";
import { attributeList } from "./element_helper.ts";
import { HTMLGlobalAttributes } from "./global_attributes.ts";
import { WebElementContent } from "./web_element_content.ts";

export type UAttributes = HTMLGlobalAttributes;

export function u(
  attributes: UAttributes,
  content?: WebElementContent,
): HTMLTemplate;

export function u(
  content?: WebElementContent,
): HTMLTemplate;

export function u(...args: [unknown, unknown?]) {
  const { content, attributes } = attributesAndContentFromArgs<
    UAttributes
  >(...args);
  return html`<u${attributeList<UAttributes>(attributes)}>${content}</u>`;
}
