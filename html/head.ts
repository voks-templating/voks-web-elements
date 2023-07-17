import { html, HTMLTemplate, HTMLTemplateGenerator } from "../deps.ts";
import { attributesAndContentFromArgs } from "../lib/util.ts";
import { attributeList } from "./element_helper.ts";
import { HTMLGlobalAttributes } from "./global_attributes.ts";

export type HeadAttributes = HTMLGlobalAttributes;

export function head(
  attributes: HeadAttributes,
  content?: string | HTMLTemplate,
): HTMLTemplateGenerator;

export function head(
  content: string | HTMLTemplate,
): HTMLTemplateGenerator;

export function head(...args: [unknown, unknown?]) {
  const { content, attributes } = attributesAndContentFromArgs<
    HeadAttributes
  >(...args);
  return html`<head ${
    attributeList<HeadAttributes>(attributes)
  }>${content}</head>`;
}
