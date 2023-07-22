import { html, HTMLTemplate, HTMLTemplateGenerator } from "../deps.ts";
import { attributesAndContentFromArgs } from "../lib/util.ts";
import { attributeList } from "./element_helper.ts";
import { HTMLGlobalAttributes } from "./global_attributes.ts";

export type CodeAttributes = HTMLGlobalAttributes;

export function code(
  attributes: CodeAttributes,
  content?:
    | string
    | HTMLTemplate
    | (string | HTMLTemplate | HTMLTemplateGenerator)[],
): HTMLTemplateGenerator;

export function code(
  content?:
    | string
    | HTMLTemplate
    | (string | HTMLTemplate | HTMLTemplateGenerator)[],
): HTMLTemplateGenerator;

export function code(...args: [unknown, unknown?]) {
  const { content, attributes } = attributesAndContentFromArgs<
    CodeAttributes
  >(...args);
  return html`<code ${
    attributeList<CodeAttributes>(attributes)
  }>${content}</code>`;
}
