import { html, HTMLTemplate, HTMLTemplateGenerator } from "../deps.ts";
import { attributesAndContentFromArgs } from "../lib/util.ts";
import { attributeList } from "./element_helper.ts";
import { HTMLGlobalAttributes } from "./global_attributes.ts";

export type OptgroupAttributes = {
  disabled?: boolean;
  label?: string;
} | HTMLGlobalAttributes;

export function optgroup(
  attributes: OptgroupAttributes,
  content?:
    | string
    | HTMLTemplate
    | (string | HTMLTemplate | HTMLTemplateGenerator)[],
): HTMLTemplateGenerator;

export function optgroup(
  content?:
    | string
    | HTMLTemplate
    | (string | HTMLTemplate | HTMLTemplateGenerator)[],
): HTMLTemplateGenerator;

export function optgroup(...args: [unknown, unknown?]) {
  const { content, attributes } = attributesAndContentFromArgs<
    OptgroupAttributes
  >(...args);
  return html`<optgroup ${
    attributeList<OptgroupAttributes>(attributes)
  }>${content}</optgroup>`;
}
