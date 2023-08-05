import { html, HTMLTemplateGenerator } from "../deps.ts";
import { attributesAndContentFromArgs } from "../lib/util.ts";
import { attributeList } from "./element_helper.ts";
import { HTMLGlobalAttributes } from "./global_attributes.ts";
import { WebElementContent } from "./web_element_content.ts";

export type UlAttributes = HTMLGlobalAttributes;

export function ul(
  attributes: UlAttributes,
  content?: WebElementContent,
): HTMLTemplateGenerator;

export function ul(
  content?: WebElementContent,
): HTMLTemplateGenerator;

export function ul(...args: [unknown, unknown?]) {
  const { content, attributes } = attributesAndContentFromArgs<
    UlAttributes
  >(...args);
  return html`<ul${attributeList<UlAttributes>(attributes)}>${content}</ul>`;
}
