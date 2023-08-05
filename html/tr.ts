import { html, HTMLTemplateGenerator } from "../deps.ts";
import { attributesAndContentFromArgs } from "../lib/util.ts";
import { attributeList } from "./element_helper.ts";
import { HTMLGlobalAttributes } from "./global_attributes.ts";
import { WebElementContent } from "./web_element_content.ts";

export type TrAttributes = HTMLGlobalAttributes;

export function tr(
  attributes: TrAttributes,
  content?: WebElementContent,
): HTMLTemplateGenerator;

export function tr(
  content?: WebElementContent,
): HTMLTemplateGenerator;

export function tr(...args: [unknown, unknown?]) {
  const { content, attributes } = attributesAndContentFromArgs<
    TrAttributes
  >(...args);
  return html`<tr${attributeList<TrAttributes>(attributes)}>${content}</tr>`;
}
