import { html, HTMLTemplateGenerator } from "../deps.ts";
import { attributesAndContentFromArgs } from "../lib/util.ts";
import { attributeList } from "./element_helper.ts";
import { HTMLGlobalAttributes } from "./global_attributes.ts";
import { WebElementContent } from "./web_element_content.ts";

export type NavAttributes = HTMLGlobalAttributes;

export function nav(
  attributes: NavAttributes,
  content?: WebElementContent,
): HTMLTemplateGenerator;

export function nav(
  content?: WebElementContent,
): HTMLTemplateGenerator;

export function nav(...args: [unknown, unknown?]) {
  const { content, attributes } = attributesAndContentFromArgs<
    NavAttributes
  >(...args);
  return html`<nav ${
    attributeList<NavAttributes>(attributes)
  }>${content}</nav>`;
}
