import { html, HTMLTemplateGenerator } from "../deps.ts";
import { attributesAndContentFromArgs } from "../lib/util.ts";
import { attributeList } from "./element_helper.ts";
import { HTMLGlobalAttributes } from "./global_attributes.ts";
import { WebElementContent } from "./web_element_content.ts";

export type CiteAttributes = HTMLGlobalAttributes;

export function cite(
  attributes: CiteAttributes,
  content?: WebElementContent,
): HTMLTemplateGenerator;

export function cite(
  content?: WebElementContent,
): HTMLTemplateGenerator;

export function cite(...args: [unknown, unknown?]) {
  const { content, attributes } = attributesAndContentFromArgs<
    CiteAttributes
  >(...args);
  return html`<cite ${
    attributeList<CiteAttributes>(attributes)
  }>${content}</cite>`;
}
