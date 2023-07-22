import { html, HTMLTemplateGenerator } from "../deps.ts";
import { attributesAndContentFromArgs } from "../lib/util.ts";
import { attributeList } from "./element_helper.ts";
import { HTMLGlobalAttributes } from "./global_attributes.ts";
import { WebElementContent } from "./web_element_content.ts";

export type CaptionAttributes = HTMLGlobalAttributes;

export function caption(
  attributes: CaptionAttributes,
  content?: WebElementContent,
): HTMLTemplateGenerator;

export function caption(
  content?: WebElementContent,
): HTMLTemplateGenerator;

export function caption(...args: [unknown, unknown?]) {
  const { content, attributes } = attributesAndContentFromArgs<
    CaptionAttributes
  >(...args);
  return html`<caption ${
    attributeList<CaptionAttributes>(attributes)
  }>${content}</caption>`;
}
