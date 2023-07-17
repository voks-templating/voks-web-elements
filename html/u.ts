import { html, HTMLTemplate, HTMLTemplateGenerator } from "../deps.ts";
import { attributesAndContentFromArgs } from "../lib/util.ts";
import { attributeList } from "./element_helper.ts";
import { HTMLGlobalAttributes } from "./global_attributes.ts";

export type UAttributes = HTMLGlobalAttributes;

export function u(
  attributes: UAttributes,
  content?: string | HTMLTemplate,
): HTMLTemplateGenerator;

export function u(
  content: string | HTMLTemplate,
): HTMLTemplateGenerator;

export function u(...args: [unknown, unknown?]) {
  const { content, attributes } = attributesAndContentFromArgs<
    UAttributes
  >(...args);
  return html`<u ${attributeList<UAttributes>(attributes)}>${content}</u>`;
}
