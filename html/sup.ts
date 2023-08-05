import { html, HTMLTemplateGenerator } from "../deps.ts";
import { attributesAndContentFromArgs } from "../lib/util.ts";
import { attributeList } from "./element_helper.ts";
import { HTMLGlobalAttributes } from "./global_attributes.ts";
import { WebElementContent } from "./web_element_content.ts";

export type SupAttributes = HTMLGlobalAttributes;

export function sup(
  attributes: SupAttributes,
  content?: WebElementContent,
): HTMLTemplateGenerator;

export function sup(
  content?: WebElementContent,
): HTMLTemplateGenerator;

export function sup(...args: [unknown, unknown?]) {
  const { content, attributes } = attributesAndContentFromArgs<
    SupAttributes
  >(...args);
  return html`<sup${
    attributeList<SupAttributes>(attributes)
  }>${content}</sup>`;
}
