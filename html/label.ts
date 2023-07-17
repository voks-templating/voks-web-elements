import { html, HTMLTemplate, HTMLTemplateGenerator } from "../deps.ts";
import { attributesAndContentFromArgs } from "../lib/util.ts";
import { attributeList } from "./element_helper.ts";
import { HTMLGlobalAttributes } from "./global_attributes.ts";

export type LabelAttributes = {
  for?: string;
} | HTMLGlobalAttributes;

export function label(
  attributes: LabelAttributes,
  content?: string | HTMLTemplate,
): HTMLTemplateGenerator;

export function label(
  content: string | HTMLTemplate,
): HTMLTemplateGenerator;

export function label(...args: [unknown, unknown?]) {
  const { content, attributes } = attributesAndContentFromArgs<
    LabelAttributes
  >(...args);
  return html`<label ${
    attributeList<LabelAttributes>(attributes)
  }>${content}</label>`;
}
