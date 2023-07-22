import { html, HTMLTemplate, HTMLTemplateGenerator } from "../deps.ts";
import { attributesAndContentFromArgs } from "../lib/util.ts";
import { attributeList } from "./element_helper.ts";
import { HTMLGlobalAttributes } from "./global_attributes.ts";

export type SampAttributes = HTMLGlobalAttributes;

export function samp(
  attributes: SampAttributes,
  content?:
    | string
    | HTMLTemplate
    | (string | HTMLTemplate | HTMLTemplateGenerator)[],
): HTMLTemplateGenerator;

export function samp(
  content: string | HTMLTemplate,
): HTMLTemplateGenerator;

export function samp(...args: [unknown, unknown?]) {
  const { content, attributes } = attributesAndContentFromArgs<
    SampAttributes
  >(...args);
  return html`<samp ${
    attributeList<SampAttributes>(attributes)
  }>${content}</samp>`;
}
