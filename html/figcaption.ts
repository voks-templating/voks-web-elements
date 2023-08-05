import { html, HTMLTemplateGenerator } from "../deps.ts";
import { attributesAndContentFromArgs } from "../lib/util.ts";
import { attributeList } from "./element_helper.ts";
import { HTMLGlobalAttributes } from "./global_attributes.ts";
import { WebElementContent } from "./web_element_content.ts";

export type FigcaptionAttributes = HTMLGlobalAttributes;

export function figcaption(
  attributes: FigcaptionAttributes,
  content?: WebElementContent,
): HTMLTemplateGenerator;

export function figcaption(
  content?: WebElementContent,
): HTMLTemplateGenerator;

export function figcaption(...args: [unknown, unknown?]) {
  const { content, attributes } = attributesAndContentFromArgs<
    FigcaptionAttributes
  >(...args);
  return html`<figcaption${
    attributeList<FigcaptionAttributes>(attributes)
  }>${content}</figcaption>`;
}
