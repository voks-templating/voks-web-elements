import { html, HTMLTemplate } from "../deps.ts";
import { attributesAndContentFromArgs } from "../lib/util.ts";
import { attributeList } from "./element_helper.ts";
import { HTMLGlobalAttributes } from "./global_attributes.ts";
import { WebElementContent } from "./web_element_content.ts";

export type HeadAttributes = HTMLGlobalAttributes;

export function head(
  attributes: HeadAttributes,
  content?: WebElementContent,
): HTMLTemplate;

export function head(
  content?: WebElementContent,
): HTMLTemplate;

export function head(...args: [unknown, unknown?]) {
  const { content, attributes } = attributesAndContentFromArgs<
    HeadAttributes
  >(...args);
  return html`<head${
    attributeList<HeadAttributes>(attributes)
  }>${content}</head>`;
}
