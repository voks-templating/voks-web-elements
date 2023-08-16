import { html, HTMLTemplate } from "../deps.ts";
import { attributesAndContentFromArgs } from "../lib/util.ts";
import { attributeList } from "./element_helper.ts";
import { HTMLGlobalAttributes } from "./global_attributes.ts";
import { WebElementContent } from "./web_element_content.ts";

export type SourceAttributes = {
  type?: string;
  srcset?: string;
  sizes?: string;
  media?: string;
  src?: string;
  height?: number;
  width?: number;
} & HTMLGlobalAttributes;

export function source(
  attributes: SourceAttributes,
  content?: WebElementContent,
): HTMLTemplate;

export function source(
  content?: WebElementContent,
): HTMLTemplate;

export function source(...args: [unknown, unknown?]) {
  const { content, attributes } = attributesAndContentFromArgs<
    SourceAttributes
  >(...args);

  return html`<source${
    attributeList<SourceAttributes>(attributes)
  }>${content}</source>`;
}
