import { html, HTMLTemplate, HTMLTemplateGenerator } from "../deps.ts";
import { attributesAndContentFromArgs } from "../lib/util.ts";
import { attributeList } from "./element_helper.ts";
import { HTMLGlobalAttributes } from "./global_attributes.ts";

export type OlAttributes = {
  reversed?: boolean;
  start?: number;
  type?: string;
} | HTMLGlobalAttributes;

export function ol(
  attributes: OlAttributes,
  content?:
    | string
    | HTMLTemplate
    | (string | HTMLTemplate | HTMLTemplateGenerator)[],
): HTMLTemplateGenerator;

export function ol(
  content?:
    | string
    | HTMLTemplate
    | (string | HTMLTemplate | HTMLTemplateGenerator)[],
): HTMLTemplateGenerator;

export function ol(...args: [unknown, unknown?]) {
  const { content, attributes } = attributesAndContentFromArgs<
    OlAttributes
  >(...args);
  return html`<ol ${attributeList<OlAttributes>(attributes)}>${content}</ol>`;
}
