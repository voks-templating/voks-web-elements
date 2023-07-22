import { html, HTMLTemplate, HTMLTemplateGenerator } from "../deps.ts";
import { attributesAndContentFromArgs } from "../lib/util.ts";
import { attributeList } from "./element_helper.ts";
import { HTMLGlobalAttributes } from "./global_attributes.ts";

export type RpAttributes = HTMLGlobalAttributes;

export function rp(
  attributes: RpAttributes,
  content?: string | HTMLTemplate | (string | HTMLTemplate | HTMLTemplateGenerator)[],
): HTMLTemplateGenerator;

export function rp(
  content: string | HTMLTemplate,
): HTMLTemplateGenerator;

export function rp(...args: [unknown, unknown?]) {
  const { content, attributes } = attributesAndContentFromArgs<
    RpAttributes
  >(...args);
  return html`<rp ${attributeList<RpAttributes>(attributes)}>${content}</rp>`;
}
