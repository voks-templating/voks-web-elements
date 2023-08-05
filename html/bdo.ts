import { html, HTMLTemplateGenerator } from "../deps.ts";
import { attributesAndContentFromArgs } from "../lib/util.ts";
import { attributeList } from "./element_helper.ts";
import { HTMLGlobalAttributes } from "./global_attributes.ts";
import { WebElementContent } from "./web_element_content.ts";

export type BdoAttributes = HTMLGlobalAttributes;

export function bdo(
  attributes: BdoAttributes,
  content?: WebElementContent,
): HTMLTemplateGenerator;

export function bdo(
  content?: WebElementContent,
): HTMLTemplateGenerator;

export function bdo(...args: [unknown, unknown?]) {
  const { content, attributes } = attributesAndContentFromArgs<
    BdoAttributes
  >(...args);
  return html`<bdo${attributeList<BdoAttributes>(attributes)}>${content}</bdo>`;
}
