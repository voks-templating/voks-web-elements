import { html, HTMLTemplate, HTMLTemplateGenerator } from "../deps.ts";
import { attributesAndContentFromArgs } from "../lib/util.ts";
import { attributeList } from "./element_helper.ts";
import { HTMLGlobalAttributes } from "./global_attributes.ts";

export type SectionAttributes = HTMLGlobalAttributes;

export function section(
  attributes: SectionAttributes,
  content?:
    | string
    | HTMLTemplate
    | (string | HTMLTemplate | HTMLTemplateGenerator)[],
): HTMLTemplateGenerator;

export function section(
  content: string | HTMLTemplate,
): HTMLTemplateGenerator;

export function section(...args: [unknown, unknown?]) {
  const { content, attributes } = attributesAndContentFromArgs<
    SectionAttributes
  >(...args);
  return html`<section ${
    attributeList<SectionAttributes>(attributes)
  }>${content}</section>`;
}
