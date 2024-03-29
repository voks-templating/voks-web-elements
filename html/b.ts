import { html, HTMLTemplate } from "../deps.ts";
import { attributesAndContentFromArgs } from "../lib/util.ts";
import { attributeList } from "./element_helper.ts";
import { HTMLGlobalAttributes } from "./global_attributes.ts";
import { WebElementContent } from "./web_element_content.ts";

export type BAttributes = HTMLGlobalAttributes;

export function b(
  attributes: BAttributes,
  content?: WebElementContent,
): HTMLTemplate;

export function b(
  content?: WebElementContent,
): HTMLTemplate;

export function b(...args: [unknown, unknown?]) {
  const { content, attributes } = attributesAndContentFromArgs<
    BAttributes
  >(...args);
  return html`<b${attributeList<BAttributes>(attributes)}>${content}</b>`;
}
