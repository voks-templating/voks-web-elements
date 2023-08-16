import { html, HTMLTemplate } from "../deps.ts";
import { attributesAndContentFromArgs } from "../lib/util.ts";
import { attributeList } from "./element_helper.ts";
import { HTMLGlobalAttributes } from "./global_attributes.ts";
import { WebElementContent } from "./web_element_content.ts";

export type TitleAttributes = HTMLGlobalAttributes;

export function title(
  attributes: TitleAttributes,
  content?: WebElementContent,
): HTMLTemplate;

export function title(
  content?: WebElementContent,
): HTMLTemplate;

export function title(...args: [unknown, unknown?]) {
  const { content, attributes } = attributesAndContentFromArgs<
    TitleAttributes
  >(...args);
  return html`<title${
    attributeList<TitleAttributes>(attributes)
  }>${content}</title>`;
}
