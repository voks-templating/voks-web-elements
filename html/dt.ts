import { html, HTMLTemplate } from "../deps.ts";
import { attributesAndContentFromArgs } from "../lib/util.ts";
import { attributeList } from "./element_helper.ts";
import { HTMLGlobalAttributes } from "./global_attributes.ts";
import { WebElementContent } from "./web_element_content.ts";

export type DtAttributes = HTMLGlobalAttributes;

export function dt(
  attributes: DtAttributes,
  content?: WebElementContent,
): HTMLTemplate;

export function dt(
  content?: WebElementContent,
): HTMLTemplate;

export function dt(...args: [unknown, unknown?]) {
  const { content, attributes } = attributesAndContentFromArgs<
    DtAttributes
  >(...args);
  return html`<dt${attributeList<DtAttributes>(attributes)}>${content}</dt>`;
}
