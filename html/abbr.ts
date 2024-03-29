import { html, HTMLTemplate } from "../deps.ts";
import { attributesAndContentFromArgs } from "../lib/util.ts";
import { attributeList } from "./element_helper.ts";
import { HTMLGlobalAttributes } from "./global_attributes.ts";
import { WebElementContent } from "./web_element_content.ts";

export type AbbrAttributes = HTMLGlobalAttributes;

export function abbr(
  attributes: AbbrAttributes,
  content?: WebElementContent,
): HTMLTemplate;

export function abbr(
  content?: WebElementContent,
): HTMLTemplate;

export function abbr(...args: [unknown, unknown?]) {
  const { content, attributes } = attributesAndContentFromArgs<
    AbbrAttributes
  >(...args);
  return html`<abbr${
    attributeList<AbbrAttributes>(attributes)
  }>${content}</abbr>`;
}
