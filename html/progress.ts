import { html, HTMLTemplate, HTMLTemplateGenerator } from "../deps.ts";
import { attributesAndContentFromArgs } from "../lib/util.ts";
import { attributeList } from "./element_helper.ts";
import { HTMLGlobalAttributes } from "./global_attributes.ts";

export type ProgressAttributes = {
  max?: number;
  value?: number;
} | HTMLGlobalAttributes;

export function progress(
  attributes: ProgressAttributes,
  content?:
    | string
    | HTMLTemplate
    | (string | HTMLTemplate | HTMLTemplateGenerator)[],
): HTMLTemplateGenerator;

export function progress(
  content: string | HTMLTemplate,
): HTMLTemplateGenerator;

export function progress(...args: [unknown, unknown?]) {
  const { content, attributes } = attributesAndContentFromArgs<
    ProgressAttributes
  >(...args);
  return html`<progress ${
    attributeList<ProgressAttributes>(attributes)
  }>${content}</progress>`;
}
