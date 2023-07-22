import { html, HTMLTemplateGenerator } from "../deps.ts";
import { attributesAndContentFromArgs } from "../lib/util.ts";
import { attributeList } from "./element_helper.ts";
import { HTMLGlobalAttributes } from "./global_attributes.ts";
import { WebElementContent } from "./web_element_content.ts";

export type DelAttributes = {
  cite?: string;
  datetime?: string;
} | HTMLGlobalAttributes;

export function del(
  attributes: DelAttributes,
  content?: WebElementContent,
): HTMLTemplateGenerator;

export function del(
  content?: WebElementContent,
): HTMLTemplateGenerator;

export function del(...args: [unknown, unknown?]) {
  const { content, attributes } = attributesAndContentFromArgs<
    DelAttributes
  >(...args);
  return html`<del ${
    attributeList<DelAttributes>(attributes)
  }>${content}</del>`;
}
