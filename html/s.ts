import { html, HTMLTemplate, HTMLTemplateGenerator } from "../deps.ts";
import { attributesAndContentFromArgs } from "../lib/util.ts";
import { attributeList } from "./element_helper.ts";
import { HTMLGlobalAttributes } from "./global_attributes.ts";

export type SAttributes = HTMLGlobalAttributes;

export function s(
  attributes: SAttributes,
  content?: string | HTMLTemplate,
): HTMLTemplateGenerator;

export function s(
  content: string | HTMLTemplate,
): HTMLTemplateGenerator;

export function s(...args: [unknown, unknown?]) {
  const { content, attributes } = attributesAndContentFromArgs<
    SAttributes
  >(...args);
  return html`<s ${attributeList<SAttributes>(attributes)}>${content}</s>`;
}
