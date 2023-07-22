import { html, HTMLTemplate, HTMLTemplateGenerator } from "../deps.ts";
import { attributesAndContentFromArgs } from "../lib/util.ts";
import { attributeList } from "./element_helper.ts";
import { HTMLGlobalAttributes } from "./global_attributes.ts";

export type SummaryAttributes = HTMLGlobalAttributes;

export function summary(
  attributes: SummaryAttributes,
  content?:
    | string
    | HTMLTemplate
    | (string | HTMLTemplate | HTMLTemplateGenerator)[],
): HTMLTemplateGenerator;

export function summary(
  content?:
    | string
    | HTMLTemplate
    | (string | HTMLTemplate | HTMLTemplateGenerator)[],
): HTMLTemplateGenerator;

export function summary(...args: [unknown, unknown?]) {
  const { content, attributes } = attributesAndContentFromArgs<
    SummaryAttributes
  >(...args);
  return html`<summary ${
    attributeList<SummaryAttributes>(attributes)
  }>${content}</summary>`;
}
