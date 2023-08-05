import { html, HTMLTemplateGenerator } from "../deps.ts";
import { attributesAndContentFromArgs } from "../lib/util.ts";
import { attributeList } from "./element_helper.ts";
import { HTMLGlobalAttributes } from "./global_attributes.ts";
import { WebElementContent } from "./web_element_content.ts";

export type AddressAttributes = HTMLGlobalAttributes;

export function address(
  attributes: AddressAttributes,
  content?: WebElementContent,
): HTMLTemplateGenerator;

export function address(
  content?: WebElementContent,
): HTMLTemplateGenerator;

export function address(...args: [unknown, unknown?]) {
  const { content, attributes } = attributesAndContentFromArgs<
    AddressAttributes
  >(...args);
  return html`<address${
    attributeList<AddressAttributes>(attributes)
  }>${content}</address>`;
}
