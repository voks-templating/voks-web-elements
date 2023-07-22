import { html, HTMLTemplateGenerator } from "../deps.ts";
import { attributesAndContentFromArgs } from "../lib/util.ts";
import { attributeList } from "./element_helper.ts";
import { HTMLGlobalAttributes } from "./global_attributes.ts";
import { WebElementContent } from "./web_element_content.ts";

export type ArticleAttributes = HTMLGlobalAttributes;

export function article(
  attributes: ArticleAttributes,
  content?: WebElementContent,
): HTMLTemplateGenerator;

export function article(
  content?: WebElementContent,
): HTMLTemplateGenerator;

export function article(...args: [unknown, unknown?]) {
  const { content, attributes } = attributesAndContentFromArgs<
    ArticleAttributes
  >(...args);
  return html`<article ${
    attributeList<ArticleAttributes>(attributes)
  }>${content}</article>`;
}
