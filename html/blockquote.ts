import { html, HTMLTemplate } from "../deps.ts";
import { attributesAndContentFromArgs } from "../lib/util.ts";
import { attributeList } from "./element_helper.ts";
import { HTMLGlobalAttributes } from "./global_attributes.ts";
import { WebElementContent } from "./web_element_content.ts";

export type BlockquoteAttributes = { cite?: string } & HTMLGlobalAttributes;

export function blockquote(
  attributes: BlockquoteAttributes,
  content?: WebElementContent,
): HTMLTemplate;

export function blockquote(
  content?: WebElementContent,
): HTMLTemplate;

export function blockquote(...args: [unknown, unknown?]) {
  const { content, attributes } = attributesAndContentFromArgs<
    BlockquoteAttributes
  >(...args);
  return html`<blockquote${
    attributeList<BlockquoteAttributes>(attributes)
  }>${content}</blockquote>`;
}
