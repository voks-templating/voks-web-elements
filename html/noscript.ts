import { html, HTMLTemplate, HTMLTemplateGenerator } from "../deps.ts";
import { attributesAndContentFromArgs } from "../lib/util.ts";
import { attributeList } from "./element_helper.ts";
import { HTMLGlobalAttributes } from "./global_attributes.ts";

export type NoscriptAttributes = HTMLGlobalAttributes;

export function noscript(
  attributes: NoscriptAttributes,
  content?: string | HTMLTemplate,
): HTMLTemplateGenerator;

export function noscript(
  content: string | HTMLTemplate,
): HTMLTemplateGenerator;

export function noscript(...args: [unknown, unknown?]) {
  const { content, attributes } = attributesAndContentFromArgs<
    NoscriptAttributes
  >(...args);
  return html`<noscript ${
    attributeList<NoscriptAttributes>(attributes)
  }>${content}</noscript>`;
}
