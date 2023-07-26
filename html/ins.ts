import { html, HTMLTemplateGenerator } from "../deps.ts";
import { attributesAndContentFromArgs } from "../lib/util.ts";
import { attributeList } from "./element_helper.ts";
import { HTMLGlobalAttributes } from "./global_attributes.ts";
import { WebElementContent } from "./web_element_content.ts";

export type InsAttributes = {
  cite?: string;
  datetime?: string;
} & HTMLGlobalAttributes;

export function ins(
  attributes: InsAttributes,
  content?: WebElementContent,
): HTMLTemplateGenerator;

export function ins(
  content?: WebElementContent,
): HTMLTemplateGenerator;

export function ins(...args: [unknown, unknown?]) {
  const { content, attributes } = attributesAndContentFromArgs<
    InsAttributes
  >(...args);
  return html`<ins ${
    attributeList<InsAttributes>(attributes)
  }>${content}</ins>`;
}
