import { html, HTMLTemplate } from "../deps.ts";
import { attributesAndContentFromArgs } from "../lib/util.ts";
import { attributeList } from "./element_helper.ts";
import { HTMLGlobalAttributes } from "./global_attributes.ts";
import { WebElementContent } from "./web_element_content.ts";

export type SectionAttributes = HTMLGlobalAttributes;

export function section(
  attributes: SectionAttributes,
  content?: WebElementContent,
): HTMLTemplate;

export function section(
  content?: WebElementContent,
): HTMLTemplate;

export function section(...args: [unknown, unknown?]) {
  const { content, attributes } = attributesAndContentFromArgs<
    SectionAttributes
  >(...args);
  return html`<section${
    attributeList<SectionAttributes>(attributes)
  }>${content}</section>`;
}
