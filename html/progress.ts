import { html, HTMLTemplateGenerator } from "../deps.ts";
import { attributesAndContentFromArgs } from "../lib/util.ts";
import { attributeList } from "./element_helper.ts";
import { HTMLGlobalAttributes } from "./global_attributes.ts";
import { WebElementContent } from "./web_element_content.ts";

export type ProgressAttributes = {
  max?: number;
  value?: number;
} & HTMLGlobalAttributes;

export function progress(
  attributes: ProgressAttributes,
  content?: WebElementContent,
): HTMLTemplateGenerator;

export function progress(
  content?: WebElementContent,
): HTMLTemplateGenerator;

export function progress(...args: [unknown, unknown?]) {
  const { content, attributes } = attributesAndContentFromArgs<
    ProgressAttributes
  >(...args);
  return html`<progress ${
    attributeList<ProgressAttributes>(attributes)
  }>${content}</progress>`;
}
