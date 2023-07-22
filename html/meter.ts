import { html, HTMLTemplate, HTMLTemplateGenerator } from "../deps.ts";
import { attributesAndContentFromArgs } from "../lib/util.ts";
import { attributeList } from "./element_helper.ts";
import { HTMLGlobalAttributes } from "./global_attributes.ts";

export type MeterAttributes = {
  value?: number;
  min?: number;
  max?: number;
  low?: number;
  high?: number;
  optimum?: number;
} | HTMLGlobalAttributes;

export function meter(
  attributes: MeterAttributes,
  content?: string | HTMLTemplate | (string | HTMLTemplate | HTMLTemplateGenerator)[],
): HTMLTemplateGenerator;

export function meter(
  content: string | HTMLTemplate,
): HTMLTemplateGenerator;

export function meter(...args: [unknown, unknown?]) {
  const { content, attributes } = attributesAndContentFromArgs<
    MeterAttributes
  >(...args);
  return html`<meter ${
    attributeList<MeterAttributes>(attributes)
  }>${content}</meter>`;
}
