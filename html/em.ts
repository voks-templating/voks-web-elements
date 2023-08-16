import { html, HTMLTemplate } from "../deps.ts";
import { attributesAndContentFromArgs } from "../lib/util.ts";
import { attributeList } from "./element_helper.ts";
import { HTMLGlobalAttributes } from "./global_attributes.ts";
import { WebElementContent } from "./web_element_content.ts";

export type EmAttributes = HTMLGlobalAttributes;

export function em(
  attributes: EmAttributes,
  content?: WebElementContent,
): HTMLTemplate;

export function em(
  content?: WebElementContent,
): HTMLTemplate;

export function em(...args: [unknown, unknown?]) {
  const { content, attributes } = attributesAndContentFromArgs<
    EmAttributes
  >(...args);
  return html`<em${attributeList<EmAttributes>(attributes)}>${content}</em>`;
}
