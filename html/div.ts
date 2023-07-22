import { html, HTMLTemplate, HTMLTemplateGenerator } from "../deps.ts";
import { attributesAndContentFromArgs } from "../lib/util.ts";
import { attributeList } from "./element_helper.ts";
import { HTMLGlobalAttributes } from "./global_attributes.ts";

export type DivAttributes = HTMLGlobalAttributes;

export function div(
  attributes: DivAttributes,
  content?:
    | string
    | HTMLTemplate
    | (string | HTMLTemplate | HTMLTemplateGenerator)[],
): HTMLTemplateGenerator;

export function div(
  content: string | HTMLTemplate,
): HTMLTemplateGenerator;

export function div(...args: [unknown, unknown?]) {
  const { content, attributes } = attributesAndContentFromArgs<
    DivAttributes
  >(...args);
  return html`<div ${
    attributeList<DivAttributes>(attributes)
  }>${content}</div>`;
}
