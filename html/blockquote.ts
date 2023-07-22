import { html, HTMLTemplate, HTMLTemplateGenerator } from "../deps.ts";
import { attributesAndContentFromArgs } from "../lib/util.ts";
import { attributeList } from "./element_helper.ts";
import { HTMLGlobalAttributes } from "./global_attributes.ts";

export type BlockquoteAttributes = { cite?: string } | HTMLGlobalAttributes;

export function blockquote(
  attributes: BlockquoteAttributes,
  content?:
    | string
    | HTMLTemplate
    | (string | HTMLTemplate | HTMLTemplateGenerator)[],
): HTMLTemplateGenerator;

export function blockquote(
  content?:
    | string
    | HTMLTemplate
    | (string | HTMLTemplate | HTMLTemplateGenerator)[],
): HTMLTemplateGenerator;

export function blockquote(...args: [unknown, unknown?]) {
  const { content, attributes } = attributesAndContentFromArgs<
    BlockquoteAttributes
  >(...args);
  return html`<blockquote ${
    attributeList<BlockquoteAttributes>(attributes)
  }>${content}</blockquote>`;
}
