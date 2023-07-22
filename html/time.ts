import { html, HTMLTemplate, HTMLTemplateGenerator } from "../deps.ts";
import { attributesAndContentFromArgs } from "../lib/util.ts";
import { attributeList } from "./element_helper.ts";
import { HTMLGlobalAttributes } from "./global_attributes.ts";

export type TimeAttributes = {
  datetime?: string;
} | HTMLGlobalAttributes;

export function time(
  attributes: TimeAttributes,
  content?:
    | string
    | HTMLTemplate
    | (string | HTMLTemplate | HTMLTemplateGenerator)[],
): HTMLTemplateGenerator;

export function time(
  content:
    | string
    | HTMLTemplate
    | (string | HTMLTemplate | HTMLTemplateGenerator)[],
): HTMLTemplateGenerator;

export function time(...args: [unknown, unknown?]) {
  const { content, attributes } = attributesAndContentFromArgs<
    TimeAttributes
  >(...args);
  return html`<time ${
    attributeList<TimeAttributes>(attributes)
  }>${content}</time>`;
}
