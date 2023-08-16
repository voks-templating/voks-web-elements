import { html, HTMLTemplate } from "../deps.ts";
import { attributesAndContentFromArgs } from "../lib/util.ts";
import { attributeList } from "./element_helper.ts";
import { HTMLGlobalAttributes } from "./global_attributes.ts";
import { WebElementContent } from "./web_element_content.ts";

export type WbrAttributes = HTMLGlobalAttributes;

export function wbr(
  attributes: WbrAttributes,
  content?: WebElementContent,
): HTMLTemplate;

export function wbr(
  content?: WebElementContent,
): HTMLTemplate;

export function wbr(...args: [unknown, unknown?]) {
  const { content, attributes } = attributesAndContentFromArgs<
    WbrAttributes
  >(...args);
  return html`<wbr${attributeList<WbrAttributes>(attributes)}>${content}</wbr>`;
}
