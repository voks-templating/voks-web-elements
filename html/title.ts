import { html, HTMLTemplate, HTMLTemplateGenerator } from "../deps.ts";
import { attributesAndContentFromArgs } from "../lib/util.ts";
import { attributeList } from "./element_helper.ts";
import { HTMLGlobalAttributes } from "./global_attributes.ts";

export type TitleAttributes = HTMLGlobalAttributes;

export function title(
  attributes: TitleAttributes,
  content?:
    | string
    | HTMLTemplate
    | (string | HTMLTemplate | HTMLTemplateGenerator)[],
): HTMLTemplateGenerator;

export function title(
  content?:
    | string
    | HTMLTemplate
    | (string | HTMLTemplate | HTMLTemplateGenerator)[],
): HTMLTemplateGenerator;

export function title(...args: [unknown, unknown?]) {
  const { content, attributes } = attributesAndContentFromArgs<
    TitleAttributes
  >(...args);
  return html`<title ${
    attributeList<TitleAttributes>(attributes)
  }>${content}</title>`;
}
