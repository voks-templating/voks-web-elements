import { html, HTMLTemplate, HTMLTemplateGenerator } from "../deps.ts";
import { attributesAndContentFromArgs } from "../lib/util.ts";
import { attributeList } from "./element_helper.ts";
import { HTMLGlobalAttributes } from "./global_attributes.ts";

export type BdiAttributes = HTMLGlobalAttributes;

export function bdi(
  attributes: BdiAttributes,
  content?:
    | string
    | HTMLTemplate
    | (string | HTMLTemplate | HTMLTemplateGenerator)[],
): HTMLTemplateGenerator;

export function bdi(
  content: string | HTMLTemplate,
): HTMLTemplateGenerator;

export function bdi(...args: [unknown, unknown?]) {
  const { content, attributes } = attributesAndContentFromArgs<
    BdiAttributes
  >(...args);
  return html`<bdi ${
    attributeList<BdiAttributes>(attributes)
  }>${content}</bdi>`;
}
