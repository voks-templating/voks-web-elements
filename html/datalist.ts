import { html, HTMLTemplate, HTMLTemplateGenerator } from "../deps.ts";
import { attributesAndContentFromArgs } from "../lib/util.ts";
import { attributeList } from "./element_helper.ts";
import { HTMLGlobalAttributes } from "./global_attributes.ts";

export type DatalistAttributes = HTMLGlobalAttributes;

export function datalist(
  attributes: DatalistAttributes,
  content?:
    | string
    | HTMLTemplate
    | (string | HTMLTemplate | HTMLTemplateGenerator)[],
): HTMLTemplateGenerator;

export function datalist(
  content: string | HTMLTemplate,
): HTMLTemplateGenerator;

export function datalist(...args: [unknown, unknown?]) {
  const { content, attributes } = attributesAndContentFromArgs<
    DatalistAttributes
  >(...args);
  return html`<datalist ${
    attributeList<DatalistAttributes>(attributes)
  }>${content}</datalist>`;
}
