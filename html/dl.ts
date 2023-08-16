import { html, HTMLTemplate } from "../deps.ts";
import { attributesAndContentFromArgs } from "../lib/util.ts";
import { attributeList } from "./element_helper.ts";
import { HTMLGlobalAttributes } from "./global_attributes.ts";
import { WebElementContent } from "./web_element_content.ts";

export type DlAttributes = HTMLGlobalAttributes;

export function dl(
  attributes: DlAttributes,
  content?: WebElementContent,
): HTMLTemplate;

export function dl(
  content?: WebElementContent,
): HTMLTemplate;

export function dl(...args: [unknown, unknown?]) {
  const { content, attributes } = attributesAndContentFromArgs<
    DlAttributes
  >(...args);
  return html`<dl${attributeList<DlAttributes>(attributes)}>${content}</dl>`;
}
