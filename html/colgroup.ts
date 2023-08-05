import { html, HTMLTemplateGenerator } from "../deps.ts";
import { attributesAndContentFromArgs } from "../lib/util.ts";
import { attributeList } from "./element_helper.ts";
import { HTMLGlobalAttributes } from "./global_attributes.ts";
import { WebElementContent } from "./web_element_content.ts";

export type ColgroupAttributes = { span?: number } & HTMLGlobalAttributes;

export function colgroup(
  attributes: ColgroupAttributes,
  content?: WebElementContent,
): HTMLTemplateGenerator;

export function colgroup(
  content?: WebElementContent,
): HTMLTemplateGenerator;

export function colgroup(...args: [unknown, unknown?]) {
  const { content, attributes } = attributesAndContentFromArgs<
    ColgroupAttributes
  >(...args);
  return html`<colgroup${
    attributeList<ColgroupAttributes>(attributes)
  }>${content}</colgroup>`;
}
