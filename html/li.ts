import { html, HTMLTemplate } from "../deps.ts";
import { attributesAndContentFromArgs } from "../lib/util.ts";
import { attributeList } from "./element_helper.ts";
import { HTMLGlobalAttributes } from "./global_attributes.ts";
import { WebElementContent } from "./web_element_content.ts";

export type LiAttributes = {
  value?: number;
} & HTMLGlobalAttributes;

export function li(
  attributes: LiAttributes,
  content?: WebElementContent,
): HTMLTemplate;

export function li(
  content?: WebElementContent,
): HTMLTemplate;

export function li(...args: [unknown, unknown?]) {
  const { content, attributes } = attributesAndContentFromArgs<
    LiAttributes
  >(...args);
  return html`<li${attributeList<LiAttributes>(attributes)}>${content}</li>`;
}
