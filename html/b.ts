import { html, HTMLTemplate, HTMLTemplateGenerator } from "../deps.ts";
import { attributesAndContentFromArgs } from "../lib/util.ts";
import { attributeList } from "./element_helper.ts";
import { HTMLGlobalAttributes } from "./global_attributes.ts";

export type BAttributes = HTMLGlobalAttributes;

export function b(
  attributes: BAttributes,
  content?: string | HTMLTemplate | (string | HTMLTemplate | HTMLTemplateGenerator)[],
): HTMLTemplateGenerator;

export function b(
  content: string | HTMLTemplate,
): HTMLTemplateGenerator;

export function b(...args: [unknown, unknown?]) {
  const { content, attributes } = attributesAndContentFromArgs<
    BAttributes
  >(...args);
  return html`<b ${attributeList<BAttributes>(attributes)}>${content}</b>`;
}
