import { html, HTMLTemplate, HTMLTemplateGenerator } from "../deps.ts";
import { attributesAndContentFromArgs } from "../lib/util.ts";
import { attributeList } from "./element_helper.ts";
import { HTMLGlobalAttributes } from "./global_attributes.ts";

export type RtAttributes = HTMLGlobalAttributes;

export function rt(
  attributes: RtAttributes,
  content?:
    | string
    | HTMLTemplate
    | (string | HTMLTemplate | HTMLTemplateGenerator)[],
): HTMLTemplateGenerator;

export function rt(
  content: string | HTMLTemplate,
): HTMLTemplateGenerator;

export function rt(...args: [unknown, unknown?]) {
  const { content, attributes } = attributesAndContentFromArgs<
    RtAttributes
  >(...args);
  return html`<rt ${attributeList<RtAttributes>(attributes)}>${content}</rt>`;
}
