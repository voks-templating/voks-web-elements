import { html, HTMLTemplate } from "../deps.ts";
import { attributesAndContentFromArgs } from "../lib/util.ts";
import { attributeList } from "./element_helper.ts";
import { HTMLGlobalAttributes } from "./global_attributes.ts";
import { WebElementContent } from "./web_element_content.ts";

export type TfootAttributes = HTMLGlobalAttributes;

export function tfoot(
  attributes: TfootAttributes,
  content?: WebElementContent,
): HTMLTemplate;

export function tfoot(
  content?: WebElementContent,
): HTMLTemplate;

export function tfoot(...args: [unknown, unknown?]) {
  const { content, attributes } = attributesAndContentFromArgs<
    TfootAttributes
  >(...args);
  return html`<tfoot${
    attributeList<TfootAttributes>(attributes)
  }>${content}</tfoot>`;
}
