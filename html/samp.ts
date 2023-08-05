import { html, HTMLTemplateGenerator } from "../deps.ts";
import { attributesAndContentFromArgs } from "../lib/util.ts";
import { attributeList } from "./element_helper.ts";
import { HTMLGlobalAttributes } from "./global_attributes.ts";
import { WebElementContent } from "./web_element_content.ts";

export type SampAttributes = HTMLGlobalAttributes;

export function samp(
  attributes: SampAttributes,
  content?: WebElementContent,
): HTMLTemplateGenerator;

export function samp(
  content?: WebElementContent,
): HTMLTemplateGenerator;

export function samp(...args: [unknown, unknown?]) {
  const { content, attributes } = attributesAndContentFromArgs<
    SampAttributes
  >(...args);
  return html`<samp${
    attributeList<SampAttributes>(attributes)
  }>${content}</samp>`;
}
