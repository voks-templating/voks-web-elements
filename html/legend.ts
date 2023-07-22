import { html, HTMLTemplateGenerator } from "../deps.ts";
import { attributesAndContentFromArgs } from "../lib/util.ts";
import { attributeList } from "./element_helper.ts";
import { HTMLGlobalAttributes } from "./global_attributes.ts";
import { WebElementContent } from "./web_element_content.ts";

export type LegendAttributes = HTMLGlobalAttributes;

export function legend(
  attributes: LegendAttributes,
  content?: WebElementContent,
): HTMLTemplateGenerator;

export function legend(
  content?: WebElementContent,
): HTMLTemplateGenerator;

export function legend(...args: [unknown, unknown?]) {
  const { content, attributes } = attributesAndContentFromArgs<
    LegendAttributes
  >(...args);
  return html`<legend ${
    attributeList<LegendAttributes>(attributes)
  }>${content}</legend>`;
}
