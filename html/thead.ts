import { html, HTMLTemplate } from "../deps.ts";
import { attributesAndContentFromArgs } from "../lib/util.ts";
import { attributeList } from "./element_helper.ts";
import { HTMLGlobalAttributes } from "./global_attributes.ts";
import { WebElementContent } from "./web_element_content.ts";

export type TheadAttributes = HTMLGlobalAttributes;

export function thead(
  attributes: TheadAttributes,
  content?: WebElementContent,
): HTMLTemplate;

export function thead(
  content?: WebElementContent,
): HTMLTemplate;

export function thead(...args: [unknown, unknown?]) {
  const { content, attributes } = attributesAndContentFromArgs<
    TheadAttributes
  >(...args);
  return html`<thead${
    attributeList<TheadAttributes>(attributes)
  }>${content}</thead>`;
}
