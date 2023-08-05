import { html, HTMLTemplateGenerator } from "../deps.ts";
import { attributesAndContentFromArgs } from "../lib/util.ts";
import { attributeList } from "./element_helper.ts";
import { HTMLGlobalAttributes } from "./global_attributes.ts";
import { WebElementContent } from "./web_element_content.ts";

export type DivAttributes = HTMLGlobalAttributes;

export function div(
  attributes: DivAttributes,
  content?: WebElementContent,
): HTMLTemplateGenerator;

export function div(
  content?: WebElementContent,
): HTMLTemplateGenerator;

export function div(...args: [unknown, unknown?]) {
  const { content, attributes } = attributesAndContentFromArgs<
    DivAttributes
  >(...args);
  return html`<div${attributeList<DivAttributes>(attributes)}>${content}</div>`;
}
