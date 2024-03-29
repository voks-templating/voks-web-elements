import { html, HTMLTemplate } from "../deps.ts";
import { attributesAndContentFromArgs } from "../lib/util.ts";
import { attributeList } from "./element_helper.ts";
import { HTMLGlobalAttributes } from "./global_attributes.ts";
import { WebElementContent } from "./web_element_content.ts";

export type ObjectAttributes =
  & ({
    data: string;
  } | {
    type: string;
  })
  & {
    form?: string;
    height?: number;
    width?: number;
    name?: string;
    usemap?: string;
  }
  & HTMLGlobalAttributes;

export function object(
  attributes: ObjectAttributes,
  content?: WebElementContent,
): HTMLTemplate;

export function object(
  content?: WebElementContent,
): HTMLTemplate;

export function object(
  ...args: [unknown, unknown?]
) {
  const { content, attributes } = attributesAndContentFromArgs<
    ObjectAttributes
  >(...args);
  return html`<object${
    attributeList<ObjectAttributes>(attributes as ObjectAttributes)
  }>${content}</object>`;
}
