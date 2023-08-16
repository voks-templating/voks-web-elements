import { html, HTMLTemplate } from "../deps.ts";
import { attributesAndContentFromArgs } from "../lib/util.ts";
import { attributeList } from "./element_helper.ts";
import { HTMLGlobalAttributes } from "./global_attributes.ts";
import { WebElementContent } from "./web_element_content.ts";

export type PictureAttributes = HTMLGlobalAttributes;

export function picture(
  attributes: PictureAttributes,
  content?: WebElementContent,
): HTMLTemplate;

export function picture(
  content?: WebElementContent,
): HTMLTemplate;

export function picture(...args: [unknown, unknown?]) {
  const { content, attributes } = attributesAndContentFromArgs<
    PictureAttributes
  >(...args);
  return html`<picture${
    attributeList<PictureAttributes>(attributes)
  }>${content}</picture>`;
}
