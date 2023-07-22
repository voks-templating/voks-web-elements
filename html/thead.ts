import { html, HTMLTemplate, HTMLTemplateGenerator } from "../deps.ts";
import { attributesAndContentFromArgs } from "../lib/util.ts";
import { attributeList } from "./element_helper.ts";
import { HTMLGlobalAttributes } from "./global_attributes.ts";

export type TheadAttributes = HTMLGlobalAttributes;

export function thead(
  attributes: TheadAttributes,
  content?: string | HTMLTemplate | (string | HTMLTemplate | HTMLTemplateGenerator)[],
): HTMLTemplateGenerator;

export function thead(
  content: string | HTMLTemplate,
): HTMLTemplateGenerator;

export function thead(...args: [unknown, unknown?]) {
  const { content, attributes } = attributesAndContentFromArgs<
    TheadAttributes
  >(...args);
  return html`<thead ${
    attributeList<TheadAttributes>(attributes)
  }>${content}</thead>`;
}
