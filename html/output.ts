import { html, HTMLTemplate, HTMLTemplateGenerator } from "../deps.ts";
import { attributesAndContentFromArgs } from "../lib/util.ts";
import { attributeList } from "./element_helper.ts";
import { HTMLGlobalAttributes } from "./global_attributes.ts";

export type OutputAttributes = {
  for?: string;
  form?: string;
  name: string;
} | HTMLGlobalAttributes;

export function output(
  attributes: OutputAttributes,
  content?: string | HTMLTemplate,
): HTMLTemplateGenerator;

export function output(
  content: string | HTMLTemplate,
): HTMLTemplateGenerator;

export function output(...args: [unknown, unknown?]) {
  const { content, attributes } = attributesAndContentFromArgs<
    OutputAttributes
  >(...args);
  return html`<output ${
    attributeList<OutputAttributes>(attributes)
  }>${content}</output>`;
}
