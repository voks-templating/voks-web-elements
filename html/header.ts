import { html, HTMLTemplate } from "../deps.ts";
import { attributesAndContentFromArgs } from "../lib/util.ts";
import { attributeList } from "./element_helper.ts";
import { HTMLGlobalAttributes } from "./global_attributes.ts";
import { WebElementContent } from "./web_element_content.ts";

export type HeaderAttributes = HTMLGlobalAttributes;

export function header(
  attributes: HeaderAttributes,
  content?: WebElementContent,
): HTMLTemplate;

export function header(
  content?: WebElementContent,
): HTMLTemplate;

export function header(...args: [unknown, unknown?]) {
  const { content, attributes } = attributesAndContentFromArgs<
    HeaderAttributes
  >(...args);
  return html`<header${
    attributeList<HeaderAttributes>(attributes)
  }>${content}</header>`;
}
