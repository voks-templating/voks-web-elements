import { html, HTMLTemplate } from "../deps.ts";
import { attributesAndContentFromArgs } from "../lib/util.ts";
import { attributeList } from "./element_helper.ts";
import { HTMLGlobalAttributes } from "./global_attributes.ts";
import { WebElementContent } from "./web_element_content.ts";

export type H6Attributes = HTMLGlobalAttributes;

export function h6(
  attributes: H6Attributes,
  content?: WebElementContent,
): HTMLTemplate;

export function h6(
  content?: WebElementContent,
): HTMLTemplate;

export function h6(...args: [unknown, unknown?]) {
  const { content, attributes } = attributesAndContentFromArgs<
    H6Attributes
  >(...args);
  return html`<h6${attributeList<H6Attributes>(attributes)}>${content}</h6>`;
}
