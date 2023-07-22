import { html, HTMLTemplateGenerator } from "../deps.ts";
import { attributesAndContentFromArgs } from "../lib/util.ts";
import { attributeList } from "./element_helper.ts";
import { HTMLGlobalAttributes } from "./global_attributes.ts";
import { WebElementContent } from "./web_element_content.ts";

export type FigureAttributes = HTMLGlobalAttributes;

export function figure(
  attributes: FigureAttributes,
  content?: WebElementContent,
): HTMLTemplateGenerator;

export function figure(
  content?: WebElementContent,
): HTMLTemplateGenerator;

export function figure(...args: [unknown, unknown?]) {
  const { content, attributes } = attributesAndContentFromArgs<
    FigureAttributes
  >(...args);
  return html`<figure ${
    attributeList<FigureAttributes>(attributes)
  }>${content}</figure>`;
}
