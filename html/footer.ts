import { html, HTMLTemplate } from "../deps.ts";
import { attributesAndContentFromArgs } from "../lib/util.ts";
import { attributeList } from "./element_helper.ts";
import { HTMLGlobalAttributes } from "./global_attributes.ts";
import { WebElementContent } from "./web_element_content.ts";

export type FooterAttributes = HTMLGlobalAttributes;

export function footer(
  attributes: FooterAttributes,
  content?: WebElementContent,
): HTMLTemplate;

export function footer(
  content?: WebElementContent,
): HTMLTemplate;

export function footer(...args: [unknown, unknown?]) {
  const { content, attributes } = attributesAndContentFromArgs<
    FooterAttributes
  >(...args);
  return html`<footer${
    attributeList<FooterAttributes>(attributes)
  }>${content}</footer>`;
}
