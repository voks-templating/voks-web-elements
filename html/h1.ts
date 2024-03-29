import { html, HTMLTemplate } from "../deps.ts";
import { attributesAndContentFromArgs } from "../lib/util.ts";
import { attributeList } from "./element_helper.ts";
import { HTMLGlobalAttributes } from "./global_attributes.ts";
import { WebElementContent } from "./web_element_content.ts";

export type H1Attributes = HTMLGlobalAttributes;

export function h1(
  attributes: H1Attributes,
  content?: WebElementContent,
): HTMLTemplate;

export function h1(
  content?: WebElementContent,
): HTMLTemplate;

export function h1(...args: [unknown, unknown?]) {
  const { content, attributes } = attributesAndContentFromArgs<
    H1Attributes
  >(...args);
  return html`<h1${attributeList<H1Attributes>(attributes)}>${content}</h1>`;
}
