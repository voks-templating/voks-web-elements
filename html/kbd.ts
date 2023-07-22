import { html, HTMLTemplate, HTMLTemplateGenerator } from "../deps.ts";
import { attributesAndContentFromArgs } from "../lib/util.ts";
import { attributeList } from "./element_helper.ts";
import { HTMLGlobalAttributes } from "./global_attributes.ts";

export type KbdAttributes = HTMLGlobalAttributes;

export function kbd(
  attributes: KbdAttributes,
  content?:
    | string
    | HTMLTemplate
    | (string | HTMLTemplate | HTMLTemplateGenerator)[],
): HTMLTemplateGenerator;

export function kbd(
  content?:
    | string
    | HTMLTemplate
    | (string | HTMLTemplate | HTMLTemplateGenerator)[],
): HTMLTemplateGenerator;

export function kbd(...args: [unknown, unknown?]) {
  const { content, attributes } = attributesAndContentFromArgs<
    KbdAttributes
  >(...args);
  return html`<kbd ${
    attributeList<KbdAttributes>(attributes)
  }>${content}</kbd>`;
}
