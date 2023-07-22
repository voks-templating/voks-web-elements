import { html, HTMLTemplate, HTMLTemplateGenerator } from "../deps.ts";
import { attributesAndContentFromArgs } from "../lib/util.ts";
import { attributeList } from "./element_helper.ts";
import { HTMLGlobalAttributes } from "./global_attributes.ts";

export type TableAttributes = HTMLGlobalAttributes;

export function table(
  attributes: TableAttributes,
  content?:
    | string
    | HTMLTemplate
    | (string | HTMLTemplate | HTMLTemplateGenerator)[],
): HTMLTemplateGenerator;

export function table(
  content?:
    | string
    | HTMLTemplate
    | (string | HTMLTemplate | HTMLTemplateGenerator)[],
): HTMLTemplateGenerator;

export function table(...args: [unknown, unknown?]) {
  const { content, attributes } = attributesAndContentFromArgs<
    TableAttributes
  >(...args);
  return html`<table ${
    attributeList<TableAttributes>(attributes)
  }>${content}</table>`;
}
