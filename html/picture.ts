import { html, HTMLTemplate, HTMLTemplateGenerator } from "../deps.ts";
import { attributesAndContentFromArgs } from "../lib/util.ts";
import { attributeList } from "./element_helper.ts";
import { HTMLGlobalAttributes } from "./global_attributes.ts";

export type PictureAttributes = HTMLGlobalAttributes;

export function picture(
  attributes: PictureAttributes,
  content?: string | HTMLTemplate | (string | HTMLTemplate | HTMLTemplateGenerator)[],
): HTMLTemplateGenerator;

export function picture(
  content: string | HTMLTemplate,
): HTMLTemplateGenerator;

export function picture(...args: [unknown, unknown?]) {
  const { content, attributes } = attributesAndContentFromArgs<
    PictureAttributes
  >(...args);
  return html`<picture ${
    attributeList<PictureAttributes>(attributes)
  }>${content}</picture>`;
}
