import { html, HTMLTemplate, HTMLTemplateGenerator } from "../deps.ts";
import { attributesAndContentFromArgs } from "../lib/util.ts";
import { attributeList } from "./element_helper.ts";
import { HTMLGlobalAttributes } from "./global_attributes.ts";

export type WbrAttributes = HTMLGlobalAttributes;

export function wbr(
  attributes: WbrAttributes,
  content?:
    | string
    | HTMLTemplate
    | (string | HTMLTemplate | HTMLTemplateGenerator)[],
): HTMLTemplateGenerator;

export function wbr(
  content?:
    | string
    | HTMLTemplate
    | (string | HTMLTemplate | HTMLTemplateGenerator)[],
): HTMLTemplateGenerator;

export function wbr(...args: [unknown, unknown?]) {
  const { content, attributes } = attributesAndContentFromArgs<
    WbrAttributes
  >(...args);
  return html`<wbr ${
    attributeList<WbrAttributes>(attributes)
  }>${content}</wbr>`;
}
