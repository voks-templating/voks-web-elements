import { html, HTMLTemplate, HTMLTemplateGenerator } from "../deps.ts";
import { attributesAndContentFromArgs } from "../lib/util.ts";
import { attributeList } from "./element_helper.ts";
import { HTMLGlobalAttributes } from "./global_attributes.ts";

export type AsideAttributes = HTMLGlobalAttributes;

export function aside(
  attributes: AsideAttributes,
  content?:
    | string
    | HTMLTemplate
    | (string | HTMLTemplate | HTMLTemplateGenerator)[],
): HTMLTemplateGenerator;

export function aside(
  content:
    | string
    | HTMLTemplate
    | (string | HTMLTemplate | HTMLTemplateGenerator)[],
): HTMLTemplateGenerator;

export function aside(...args: [unknown, unknown?]) {
  const { content, attributes } = attributesAndContentFromArgs<
    AsideAttributes
  >(...args);
  return html`<aside ${
    attributeList<AsideAttributes>(attributes)
  }>${content}</aside>`;
}
