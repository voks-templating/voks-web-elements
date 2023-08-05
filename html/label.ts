import { html, HTMLTemplateGenerator } from "../deps.ts";
import { attributesAndContentFromArgs } from "../lib/util.ts";
import { attributeList } from "./element_helper.ts";
import { HTMLGlobalAttributes } from "./global_attributes.ts";
import { WebElementContent } from "./web_element_content.ts";

export type LabelAttributes = {
  for?: string;
} & HTMLGlobalAttributes;

export function label(
  attributes: LabelAttributes,
  content?: WebElementContent,
): HTMLTemplateGenerator;

export function label(
  content?: WebElementContent,
): HTMLTemplateGenerator;

export function label(...args: [unknown, unknown?]) {
  const { content, attributes } = attributesAndContentFromArgs<
    LabelAttributes
  >(...args);
  return html`<label${
    attributeList<LabelAttributes>(attributes)
  }>${content}</label>`;
}
