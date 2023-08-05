import { html, HTMLTemplateGenerator } from "../deps.ts";
import { attributesAndContentFromArgs } from "../lib/util.ts";
import { attributeList } from "./element_helper.ts";
import { HTMLGlobalAttributes } from "./global_attributes.ts";
import { WebElementContent } from "./web_element_content.ts";

export type RubyAttributes = HTMLGlobalAttributes;

export function ruby(
  attributes: RubyAttributes,
  content?: WebElementContent,
): HTMLTemplateGenerator;

export function ruby(
  content?: WebElementContent,
): HTMLTemplateGenerator;

export function ruby(...args: [unknown, unknown?]) {
  const { content, attributes } = attributesAndContentFromArgs<
    RubyAttributes
  >(...args);
  return html`<ruby${
    attributeList<RubyAttributes>(attributes)
  }>${content}</ruby>`;
}
