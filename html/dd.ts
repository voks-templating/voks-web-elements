import { html, HTMLTemplate, HTMLTemplateGenerator } from "../deps.ts";
import { attributesAndContentFromArgs } from "../lib/util.ts";
import { attributeList } from "./element_helper.ts";
import { HTMLGlobalAttributes } from "./global_attributes.ts";

export type DdAttributes = HTMLGlobalAttributes;

export function dd(
  attributes: DdAttributes,
  content?:
    | string
    | HTMLTemplate
    | (string | HTMLTemplate | HTMLTemplateGenerator)[],
): HTMLTemplateGenerator;

export function dd(
  content?:
    | string
    | HTMLTemplate
    | (string | HTMLTemplate | HTMLTemplateGenerator)[],
): HTMLTemplateGenerator;

export function dd(...args: [unknown, unknown?]) {
  const { content, attributes } = attributesAndContentFromArgs<
    DdAttributes
  >(...args);
  return html`<dd ${attributeList<DdAttributes>(attributes)}>${content}</dd>`;
}
