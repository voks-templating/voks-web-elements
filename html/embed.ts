import { html, HTMLTemplate, HTMLTemplateGenerator } from "../deps.ts";
import { attributesAndContentFromArgs } from "../lib/util.ts";
import { attributeList } from "./element_helper.ts";
import { HTMLGlobalAttributes } from "./global_attributes.ts";

export type EmbedAttributes = {
  height?: number;
  width?: number;
  src?: string;
  type?: string;
} | HTMLGlobalAttributes;

export function embed(
  attributes: EmbedAttributes,
  content?: string | HTMLTemplate,
): HTMLTemplateGenerator;

export function embed(
  content: string | HTMLTemplate,
): HTMLTemplateGenerator;

export function embed(...args: [unknown, unknown?]) {
  const { content, attributes } = attributesAndContentFromArgs<
    EmbedAttributes
  >(...args);
  return html`<embed ${
    attributeList<EmbedAttributes>(attributes)
  }>${content}</embed>`;
}
