import { html, HTMLTemplate, HTMLTemplateGenerator } from "../deps.ts";
import { attributesAndContentFromArgs } from "../lib/util.ts";
import { attributeList } from "./element_helper.ts";
import { HTMLGlobalAttributes } from "./global_attributes.ts";

export type DataAttributes = { value: string | number } | HTMLGlobalAttributes;

export function data(
  attributes: DataAttributes,
  content?:
    | string
    | HTMLTemplate
    | (string | HTMLTemplate | HTMLTemplateGenerator)[],
): HTMLTemplateGenerator;

export function data(
  content:
    | string
    | HTMLTemplate
    | (string | HTMLTemplate | HTMLTemplateGenerator)[],
): HTMLTemplateGenerator;

export function data(...args: [unknown, unknown?]) {
  const { content, attributes } = attributesAndContentFromArgs<
    DataAttributes
  >(...args);
  return html`<data ${
    attributeList<DataAttributes>(attributes)
  }>${content}</data>`;
}
