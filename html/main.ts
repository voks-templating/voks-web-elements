import { html, HTMLTemplate, HTMLTemplateGenerator } from "../deps.ts";
import { attributesAndContentFromArgs } from "../lib/util.ts";
import { attributeList } from "./element_helper.ts";
import { HTMLGlobalAttributes } from "./global_attributes.ts";

export type MainAttributes = HTMLGlobalAttributes;

export function main(
  attributes: MainAttributes,
  content?:
    | string
    | HTMLTemplate
    | (string | HTMLTemplate | HTMLTemplateGenerator)[],
): HTMLTemplateGenerator;

export function main(
  content: string | HTMLTemplate,
): HTMLTemplateGenerator;

export function main(...args: [unknown, unknown?]) {
  const { content, attributes } = attributesAndContentFromArgs<
    MainAttributes
  >(...args);
  return html`<main ${
    attributeList<MainAttributes>(attributes)
  }>${content}</main>`;
}
