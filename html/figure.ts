import { html, HTMLTemplate, HTMLTemplateGenerator } from "../deps.ts";
import { attributesAndContentFromArgs } from "../lib/util.ts";
import { attributeList } from "./element_helper.ts";
import { HTMLGlobalAttributes } from "./global_attributes.ts";

export type FigureAttributes = HTMLGlobalAttributes;

export function figure(
  attributes: FigureAttributes,
  content?:
    | string
    | HTMLTemplate
    | (string | HTMLTemplate | HTMLTemplateGenerator)[],
): HTMLTemplateGenerator;

export function figure(
  content: string | HTMLTemplate,
): HTMLTemplateGenerator;

export function figure(...args: [unknown, unknown?]) {
  const { content, attributes } = attributesAndContentFromArgs<
    FigureAttributes
  >(...args);
  return html`<figure ${
    attributeList<FigureAttributes>(attributes)
  }>${content}</figure>`;
}
