import { html, HTMLTemplateGenerator } from "../deps.ts";
import { attributesAndContentFromArgs } from "../lib/util.ts";
import { attributeList } from "./element_helper.ts";
import { HTMLGlobalAttributes } from "./global_attributes.ts";
import { WebElementContent } from "./web_element_content.ts";

export type OutputAttributes = {
  for?: string;
  form?: string;
  name: string;
} & HTMLGlobalAttributes;

export function output(
  attributes: OutputAttributes,
  content?: WebElementContent,
): HTMLTemplateGenerator;

export function output(
  content?: WebElementContent,
): HTMLTemplateGenerator;

export function output(...args: [unknown, unknown?]) {
  const { content, attributes } = attributesAndContentFromArgs<
    OutputAttributes
  >(...args);
  return html`<output ${
    attributeList<OutputAttributes>(attributes as OutputAttributes)
  }>${content}</output>`;
}
