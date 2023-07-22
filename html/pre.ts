import { html, HTMLTemplateGenerator } from "../deps.ts";
import { attributesAndContentFromArgs } from "../lib/util.ts";
import { attributeList } from "./element_helper.ts";
import { HTMLGlobalAttributes } from "./global_attributes.ts";
import { WebElementContent } from "./web_element_content.ts";

export type PreAttributes = HTMLGlobalAttributes;

export function pre(
  attributes: PreAttributes,
  content?: WebElementContent,
): HTMLTemplateGenerator;

export function pre(
  content?: WebElementContent,
): HTMLTemplateGenerator;

export function pre(...args: [unknown, unknown?]) {
  const { content, attributes } = attributesAndContentFromArgs<
    PreAttributes
  >(...args);
  return html`<pre ${
    attributeList<PreAttributes>(attributes)
  }>${content}</pre>`;
}
