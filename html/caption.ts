import { html, HTMLTemplate, HTMLTemplateGenerator } from "../deps.ts";
import { attributesAndContentFromArgs } from "../lib/util.ts";
import { attributeList } from "./element_helper.ts";
import { HTMLGlobalAttributes } from "./global_attributes.ts";

export type CaptionAttributes = HTMLGlobalAttributes;

export function caption(
  attributes: CaptionAttributes,
  content?:
    | string
    | HTMLTemplate
    | (string | HTMLTemplate | HTMLTemplateGenerator)[],
): HTMLTemplateGenerator;

export function caption(
  content?:
    | string
    | HTMLTemplate
    | (string | HTMLTemplate | HTMLTemplateGenerator)[],
): HTMLTemplateGenerator;

export function caption(...args: [unknown, unknown?]) {
  const { content, attributes } = attributesAndContentFromArgs<
    CaptionAttributes
  >(...args);
  return html`<caption ${
    attributeList<CaptionAttributes>(attributes)
  }>${content}</caption>`;
}
