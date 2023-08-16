import { html, HTMLTemplate } from "../deps.ts";
import { attributesAndContentFromArgs } from "../lib/util.ts";
import { attributeList } from "./element_helper.ts";
import { HTMLGlobalAttributes } from "./global_attributes.ts";
import { WebElementContent } from "./web_element_content.ts";

export type MainAttributes = HTMLGlobalAttributes;

export function main(
  attributes: MainAttributes,
  content?: WebElementContent,
): HTMLTemplate;

export function main(
  content?: WebElementContent,
): HTMLTemplate;

export function main(...args: [unknown, unknown?]) {
  const { content, attributes } = attributesAndContentFromArgs<
    MainAttributes
  >(...args);
  return html`<main${
    attributeList<MainAttributes>(attributes)
  }>${content}</main>`;
}
