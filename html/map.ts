import { html, HTMLTemplate } from "../deps.ts";
import { attributesAndContentFromArgs } from "../lib/util.ts";
import { attributeList } from "./element_helper.ts";
import { HTMLGlobalAttributes } from "./global_attributes.ts";
import { WebElementContent } from "./web_element_content.ts";

export type MapAttributes = {
  name?: string;
} & HTMLGlobalAttributes;

export function map(
  attributes: MapAttributes,
  content?: WebElementContent,
): HTMLTemplate;

export function map(
  content?: WebElementContent,
): HTMLTemplate;

export function map(...args: [unknown, unknown?]) {
  const { content, attributes } = attributesAndContentFromArgs<
    MapAttributes
  >(...args);
  return html`<map${attributeList<MapAttributes>(attributes)}>${content}</map>`;
}
