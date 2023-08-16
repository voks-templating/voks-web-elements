import { html, HTMLTemplate } from "../deps.ts";
import { attributesAndContentFromArgs } from "../lib/util.ts";
import { attributeList } from "./element_helper.ts";
import { HTMLGlobalAttributes } from "./global_attributes.ts";
import { WebElementContent } from "./web_element_content.ts";

export type EmbedAttributes = {
  height?: number;
  width?: number;
  src?: string;
  type?: string;
} & HTMLGlobalAttributes;

export function embed(
  attributes: EmbedAttributes,
  content?: WebElementContent,
): HTMLTemplate;

export function embed(
  content?: WebElementContent,
): HTMLTemplate;

export function embed(...args: [unknown, unknown?]) {
  const { content, attributes } = attributesAndContentFromArgs<
    EmbedAttributes
  >(...args);
  return html`<embed${
    attributeList<EmbedAttributes>(attributes)
  }>${content}</embed>`;
}
