import { html, HTMLTemplate, HTMLTemplateGenerator } from "../deps.ts";
import { attributesAndContentFromArgs } from "../lib/util.ts";
import { attributeList } from "./element_helper.ts";
import { HTMLGlobalAttributes } from "./global_attributes.ts";

export type CiteAttributes = HTMLGlobalAttributes;

export function cite(
  attributes: CiteAttributes,
  content?:
    | string
    | HTMLTemplate
    | (string | HTMLTemplate | HTMLTemplateGenerator)[],
): HTMLTemplateGenerator;

export function cite(
  content?:
    | string
    | HTMLTemplate
    | (string | HTMLTemplate | HTMLTemplateGenerator)[],
): HTMLTemplateGenerator;

export function cite(...args: [unknown, unknown?]) {
  const { content, attributes } = attributesAndContentFromArgs<
    CiteAttributes
  >(...args);
  return html`<cite ${
    attributeList<CiteAttributes>(attributes)
  }>${content}</cite>`;
}
