import { html, HTMLTemplateGenerator } from "../deps.ts";
import { attributesAndContentFromArgs } from "../lib/util.ts";
import { attributeList } from "./element_helper.ts";
import { HTMLGlobalAttributes } from "./global_attributes.ts";
import { WebElementContent } from "./web_element_content.ts";

export type StrongAttributes = HTMLGlobalAttributes;

export function strong(
  attributes: StrongAttributes,
  content?: WebElementContent,
): HTMLTemplateGenerator;

export function strong(
  content?: WebElementContent,
): HTMLTemplateGenerator;

export function strong(...args: [unknown, unknown?]) {
  const { content, attributes } = attributesAndContentFromArgs<
    StrongAttributes
  >(...args);
  return html`<strong${
    attributeList<StrongAttributes>(attributes)
  }>${content}</strong>`;
}
