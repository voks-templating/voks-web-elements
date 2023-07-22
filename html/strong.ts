import { html, HTMLTemplate, HTMLTemplateGenerator } from "../deps.ts";
import { attributesAndContentFromArgs } from "../lib/util.ts";
import { attributeList } from "./element_helper.ts";
import { HTMLGlobalAttributes } from "./global_attributes.ts";

export type StrongAttributes = HTMLGlobalAttributes;

export function strong(
  attributes: StrongAttributes,
  content?:
    | string
    | HTMLTemplate
    | (string | HTMLTemplate | HTMLTemplateGenerator)[],
): HTMLTemplateGenerator;

export function strong(
  content: string | HTMLTemplate,
): HTMLTemplateGenerator;

export function strong(...args: [unknown, unknown?]) {
  const { content, attributes } = attributesAndContentFromArgs<
    StrongAttributes
  >(...args);
  return html`<strong ${
    attributeList<StrongAttributes>(attributes)
  }>${content}</strong>`;
}
