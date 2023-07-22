import { html, HTMLTemplate, HTMLTemplateGenerator } from "../deps.ts";
import { attributesAndContentFromArgs } from "../lib/util.ts";
import { attributeList } from "./element_helper.ts";
import { HTMLGlobalAttributes } from "./global_attributes.ts";

export type StyleAttributes = {
  media?: string;
  nonce?: string;
  title?: string;
} | HTMLGlobalAttributes;

export function style(
  attributes: StyleAttributes,
  content?:
    | string
    | HTMLTemplate
    | (string | HTMLTemplate | HTMLTemplateGenerator)[],
): HTMLTemplateGenerator;

export function style(
  content?:
    | string
    | HTMLTemplate
    | (string | HTMLTemplate | HTMLTemplateGenerator)[],
): HTMLTemplateGenerator;

export function style(...args: [unknown, unknown?]) {
  const { content, attributes } = attributesAndContentFromArgs<
    StyleAttributes
  >(...args);
  return html`<style ${
    attributeList<StyleAttributes>(attributes)
  }>${content}</style>`;
}
