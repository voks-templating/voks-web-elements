import { html, HTMLTemplate } from "../deps.ts";
import { attributesAndContentFromArgs } from "../lib/util.ts";
import { attributeList } from "./element_helper.ts";
import { HTMLGlobalAttributes } from "./global_attributes.ts";
import { WebElementContent } from "./web_element_content.ts";

export type SupAttributes = HTMLGlobalAttributes;

export function sup(
  attributes: SupAttributes,
  content?: WebElementContent,
): HTMLTemplate;

export function sup(
  content?: WebElementContent,
): HTMLTemplate;

export function sup(...args: [unknown, unknown?]) {
  const { content, attributes } = attributesAndContentFromArgs<
    SupAttributes
  >(...args);
  return html`<sup${attributeList<SupAttributes>(attributes)}>${content}</sup>`;
}
