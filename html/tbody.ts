import { html, HTMLTemplate } from "../deps.ts";
import { attributesAndContentFromArgs } from "../lib/util.ts";
import { attributeList } from "./element_helper.ts";
import { HTMLGlobalAttributes } from "./global_attributes.ts";
import { WebElementContent } from "./web_element_content.ts";

export type TbodyAttributes = HTMLGlobalAttributes;

export function tbody(
  attributes: TbodyAttributes,
  content?: WebElementContent,
): HTMLTemplate;

export function tbody(
  content?: WebElementContent,
): HTMLTemplate;

export function tbody(...args: [unknown, unknown?]) {
  const { content, attributes } = attributesAndContentFromArgs<
    TbodyAttributes
  >(...args);
  return html`<tbody${
    attributeList<TbodyAttributes>(attributes)
  }>${content}</tbody>`;
}
