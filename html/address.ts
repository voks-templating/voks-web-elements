import { html, HTMLTemplate, HTMLTemplateGenerator } from "../deps.ts";
import { attributesAndContentFromArgs } from "../lib/util.ts";
import { attributeList } from "./element_helper.ts";
import { HTMLGlobalAttributes } from "./global_attributes.ts";

export type AddressAttributes = HTMLGlobalAttributes;

export function address(
  attributes: AddressAttributes,
  content?:
    | string
    | HTMLTemplate
    | (string | HTMLTemplate | HTMLTemplateGenerator)[],
): HTMLTemplateGenerator;

export function address(
  content:
    | string
    | HTMLTemplate
    | (string | HTMLTemplate | HTMLTemplateGenerator)[],
): HTMLTemplateGenerator;

export function address(...args: [unknown, unknown?]) {
  const { content, attributes } = attributesAndContentFromArgs<
    AddressAttributes
  >(...args);
  return html`<address ${
    attributeList<AddressAttributes>(attributes)
  }>${content}</address>`;
}
