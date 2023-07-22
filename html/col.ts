import { html, HTMLTemplateGenerator } from "../deps.ts";
import { attributesAndContentFromArgs } from "../lib/util.ts";
import { attributeList } from "./element_helper.ts";
import { HTMLGlobalAttributes } from "./global_attributes.ts";
import { WebElementContent } from "./web_element_content.ts";

export type ColAttributes = { span?: number } | HTMLGlobalAttributes;

export function col(
  attributes: ColAttributes,
  content?: WebElementContent,
): HTMLTemplateGenerator;

export function col(
  content?: WebElementContent,
): HTMLTemplateGenerator;

export function col(...args: [unknown, unknown?]) {
  const { content, attributes } = attributesAndContentFromArgs<
    ColAttributes
  >(...args);
  return html`<col ${
    attributeList<ColAttributes>(attributes)
  }>${content}</col>`;
}
