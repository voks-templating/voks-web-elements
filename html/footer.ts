import { html, HTMLTemplate, HTMLTemplateGenerator } from "../deps.ts";
import { attributesAndContentFromArgs } from "../lib/util.ts";
import { attributeList } from "./element_helper.ts";
import { HTMLGlobalAttributes } from "./global_attributes.ts";

export type FooterAttributes = HTMLGlobalAttributes;

export function footer(
  attributes: FooterAttributes,
  content?: string | HTMLTemplate,
): HTMLTemplateGenerator;

export function footer(
  content: string | HTMLTemplate,
): HTMLTemplateGenerator;

export function footer(...args: [unknown, unknown?]) {
  const { content, attributes } = attributesAndContentFromArgs<
    FooterAttributes
  >(...args);
  return html`<footer ${
    attributeList<FooterAttributes>(attributes)
  }>${content}</footer>`;
}
