import { html, HTMLTemplate } from "../deps.ts";
import { attributesAndContentFromArgs } from "../lib/util.ts";
import { attributeList } from "./element_helper.ts";
import { HTMLGlobalAttributes } from "./global_attributes.ts";
import { WebElementContent } from "./web_element_content.ts";

export type DataAttributes = { value: string | number } & HTMLGlobalAttributes;

export function data(
  attributes: DataAttributes,
  content?: WebElementContent,
): HTMLTemplate;

export function data(
  content?: WebElementContent,
): HTMLTemplate;

export function data(...args: [unknown, unknown?]) {
  const { content, attributes } = attributesAndContentFromArgs<
    DataAttributes
  >(...args);
  return html`<data${
    attributeList<DataAttributes>(attributes as DataAttributes)
  }>${content}</data>`;
}
