import { html, HTMLTemplateGenerator } from "../deps.ts";
import { attributesAndContentFromArgs } from "../lib/util.ts";
import { attributeList } from "./element_helper.ts";
import { HTMLGlobalAttributes } from "./global_attributes.ts";
import { WebElementContent } from "./web_element_content.ts";

export type QAttributes = {
  cite?: string;
} & HTMLGlobalAttributes;

export function q(
  attributes: QAttributes,
  content?: WebElementContent,
): HTMLTemplateGenerator;

export function q(
  content?: WebElementContent,
): HTMLTemplateGenerator;

export function q(...args: [unknown, unknown?]) {
  const { content, attributes } = attributesAndContentFromArgs<
    QAttributes
  >(...args);
  return html`<q${attributeList<QAttributes>(attributes)}>${content}</q>`;
}
