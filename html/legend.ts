import { html, HTMLTemplate, HTMLTemplateGenerator } from "../deps.ts";
import { attributesAndContentFromArgs } from "../lib/util.ts";
import { attributeList } from "./element_helper.ts";
import { HTMLGlobalAttributes } from "./global_attributes.ts";

export type LegendAttributes = HTMLGlobalAttributes;

export function legend(
  attributes: LegendAttributes,
  content?:
    | string
    | HTMLTemplate
    | (string | HTMLTemplate | HTMLTemplateGenerator)[],
): HTMLTemplateGenerator;

export function legend(
  content: string | HTMLTemplate,
): HTMLTemplateGenerator;

export function legend(...args: [unknown, unknown?]) {
  const { content, attributes } = attributesAndContentFromArgs<
    LegendAttributes
  >(...args);
  return html`<legend ${
    attributeList<LegendAttributes>(attributes)
  }>${content}</legend>`;
}
