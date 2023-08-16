import { html, HTMLTemplate } from "../deps.ts";
import { attributesAndContentFromArgs } from "../lib/util.ts";
import { attributeList } from "./element_helper.ts";
import { HTMLGlobalAttributes } from "./global_attributes.ts";
import { WebElementContent } from "./web_element_content.ts";

export type NoscriptAttributes = HTMLGlobalAttributes;

export function noscript(
  attributes: NoscriptAttributes,
  content?: WebElementContent,
): HTMLTemplate;

export function noscript(
  content?: WebElementContent,
): HTMLTemplate;

export function noscript(...args: [unknown, unknown?]) {
  const { content, attributes } = attributesAndContentFromArgs<
    NoscriptAttributes
  >(...args);
  return html`<noscript${
    attributeList<NoscriptAttributes>(attributes)
  }>${content}</noscript>`;
}
