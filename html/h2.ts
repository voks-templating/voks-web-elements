import { html, HTMLTemplateGenerator } from "../deps.ts";
import { attributesAndContentFromArgs } from "../lib/util.ts";
import { attributeList } from "./element_helper.ts";
import { HTMLGlobalAttributes } from "./global_attributes.ts";
import { WebElementContent } from "./web_element_content.ts";

export type H2Attributes = HTMLGlobalAttributes;

export function h2(
  attributes: H2Attributes,
  content?: WebElementContent,
): HTMLTemplateGenerator;

export function h2(
  content?: WebElementContent,
): HTMLTemplateGenerator;

export function h2(...args: [unknown, unknown?]) {
  const { content, attributes } = attributesAndContentFromArgs<
    H2Attributes
  >(...args);
  return html`<h2 ${attributeList<H2Attributes>(attributes)}>${content}</h2>`;
}
