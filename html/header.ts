import { html, HTMLTemplate, HTMLTemplateGenerator } from "../deps.ts";
import { attributesAndContentFromArgs } from "../lib/util.ts";
import { attributeList } from "./element_helper.ts";
import { HTMLGlobalAttributes } from "./global_attributes.ts";

export type HeaderAttributes = HTMLGlobalAttributes;

export function header(
  attributes: HeaderAttributes,
  content?:
    | string
    | HTMLTemplate
    | (string | HTMLTemplate | HTMLTemplateGenerator)[],
): HTMLTemplateGenerator;

export function header(
  content: string | HTMLTemplate,
): HTMLTemplateGenerator;

export function header(...args: [unknown, unknown?]) {
  const { content, attributes } = attributesAndContentFromArgs<
    HeaderAttributes
  >(...args);
  return html`<header ${
    attributeList<HeaderAttributes>(attributes)
  }>${content}</header>`;
}
