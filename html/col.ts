import { html, HTMLTemplate, HTMLTemplateGenerator } from "../deps.ts";
import { attributesAndContentFromArgs } from "../lib/util.ts";
import { attributeList } from "./element_helper.ts";
import { HTMLGlobalAttributes } from "./global_attributes.ts";

export type ColAttributes = { span?: number } | HTMLGlobalAttributes;

export function col(
  attributes: ColAttributes,
  content?:
    | string
    | HTMLTemplate
    | (string | HTMLTemplate | HTMLTemplateGenerator)[],
): HTMLTemplateGenerator;

export function col(
  content:
    | string
    | HTMLTemplate
    | (string | HTMLTemplate | HTMLTemplateGenerator)[],
): HTMLTemplateGenerator;

export function col(...args: [unknown, unknown?]) {
  const { content, attributes } = attributesAndContentFromArgs<
    ColAttributes
  >(...args);
  return html`<col ${
    attributeList<ColAttributes>(attributes)
  }>${content}</col>`;
}
