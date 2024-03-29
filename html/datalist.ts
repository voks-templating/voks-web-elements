import { html, HTMLTemplate } from "../deps.ts";
import { attributesAndContentFromArgs } from "../lib/util.ts";
import { attributeList } from "./element_helper.ts";
import { HTMLGlobalAttributes } from "./global_attributes.ts";
import { WebElementContent } from "./web_element_content.ts";

export type DatalistAttributes = HTMLGlobalAttributes;

export function datalist(
  attributes: DatalistAttributes,
  content?: WebElementContent,
): HTMLTemplate;

export function datalist(
  content?: WebElementContent,
): HTMLTemplate;

export function datalist(...args: [unknown, unknown?]) {
  const { content, attributes } = attributesAndContentFromArgs<
    DatalistAttributes
  >(...args);
  return html`<datalist${
    attributeList<DatalistAttributes>(attributes)
  }>${content}</datalist>`;
}
