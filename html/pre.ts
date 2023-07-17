import { html, HTMLTemplate, HTMLTemplateGenerator } from "../deps.ts";
import { attributesAndContentFromArgs } from "../lib/util.ts";
import { attributeList } from "./element_helper.ts";
import { HTMLGlobalAttributes } from "./global_attributes.ts";

export type PreAttributes = HTMLGlobalAttributes;

export function pre(
  attributes: PreAttributes,
  content?: string | HTMLTemplate,
): HTMLTemplateGenerator;

export function pre(
  content: string | HTMLTemplate,
): HTMLTemplateGenerator;

export function pre(...args: [unknown, unknown?]) {
  const { content, attributes } = attributesAndContentFromArgs<
    PreAttributes
  >(...args);
  return html`<pre ${
    attributeList<PreAttributes>(attributes)
  }>${content}</pre>`;
}
