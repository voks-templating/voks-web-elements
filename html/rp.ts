import { html, HTMLTemplate } from "../deps.ts";
import { attributesAndContentFromArgs } from "../lib/util.ts";
import { attributeList } from "./element_helper.ts";
import { HTMLGlobalAttributes } from "./global_attributes.ts";
import { WebElementContent } from "./web_element_content.ts";

export type RpAttributes = HTMLGlobalAttributes;

export function rp(
  attributes: RpAttributes,
  content?: WebElementContent,
): HTMLTemplate;

export function rp(
  content?: WebElementContent,
): HTMLTemplate;

export function rp(...args: [unknown, unknown?]) {
  const { content, attributes } = attributesAndContentFromArgs<
    RpAttributes
  >(...args);
  return html`<rp${attributeList<RpAttributes>(attributes)}>${content}</rp>`;
}
