import { html, HTMLTemplateGenerator } from "../deps.ts";
import { attributesAndContentFromArgs } from "../lib/util.ts";
import { attributeList } from "./element_helper.ts";
import { HTMLGlobalAttributes } from "./global_attributes.ts";
import { WebElementContent } from "./web_element_content.ts";

export type AsideAttributes = HTMLGlobalAttributes;

export function aside(
  attributes: AsideAttributes,
  content?: WebElementContent,
): HTMLTemplateGenerator;

export function aside(
  content?: WebElementContent,
): HTMLTemplateGenerator;

export function aside(...args: [unknown, unknown?]) {
  const { content, attributes } = attributesAndContentFromArgs<
    AsideAttributes
  >(...args);
  return html`<aside${
    attributeList<AsideAttributes>(attributes)
  }>${content}</aside>`;
}
