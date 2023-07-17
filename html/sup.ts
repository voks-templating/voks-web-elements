import { html, HTMLTemplate, HTMLTemplateGenerator } from "../deps.ts";
import { attributesAndContentFromArgs } from "../lib/util.ts";
import { attributeList } from "./element_helper.ts";
import { HTMLGlobalAttributes } from "./global_attributes.ts";

export type SupAttributes = HTMLGlobalAttributes;

export function sup(
  attributes: SupAttributes,
  content?: string | HTMLTemplate,
): HTMLTemplateGenerator;

export function sup(
  content: string | HTMLTemplate,
): HTMLTemplateGenerator;

export function sup(...args: [unknown, unknown?]) {
  const { content, attributes } = attributesAndContentFromArgs<
    SupAttributes
  >(...args);
  return html`<sup ${
    attributeList<SupAttributes>(attributes)
  }>${content}</sup>`;
}
