import { html, HTMLTemplateGenerator } from "../deps.ts";
import { attributesAndContentFromArgs } from "../lib/util.ts";
import { attributeList } from "./element_helper.ts";
import { HTMLGlobalAttributes } from "./global_attributes.ts";
import { WebElementContent } from "./web_element_content.ts";

export type RtAttributes = HTMLGlobalAttributes;

export function rt(
  attributes: RtAttributes,
  content?: WebElementContent,
): HTMLTemplateGenerator;

export function rt(
  content?: WebElementContent,
): HTMLTemplateGenerator;

export function rt(...args: [unknown, unknown?]) {
  const { content, attributes } = attributesAndContentFromArgs<
    RtAttributes
  >(...args);
  return html`<rt${attributeList<RtAttributes>(attributes)}>${content}</rt>`;
}
