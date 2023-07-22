import { html, HTMLTemplate, HTMLTemplateGenerator } from "../deps.ts";
import { attributesAndContentFromArgs } from "../lib/util.ts";
import { attributeList } from "./element_helper.ts";
import { HTMLGlobalAttributes } from "./global_attributes.ts";

export type DetailsAttributes = {
  open?: boolean;
} | HTMLGlobalAttributes;

export function details(
  attributes: DetailsAttributes,
  content?:
    | string
    | HTMLTemplate
    | (string | HTMLTemplate | HTMLTemplateGenerator)[],
): HTMLTemplateGenerator;

export function details(
  content?:
    | string
    | HTMLTemplate
    | (string | HTMLTemplate | HTMLTemplateGenerator)[],
): HTMLTemplateGenerator;

export function details(...args: [unknown, unknown?]) {
  const { content, attributes } = attributesAndContentFromArgs<
    DetailsAttributes
  >(...args);
  return html`<details ${
    attributeList<DetailsAttributes>(attributes)
  }>${content}</details>`;
}
