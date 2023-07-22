import { html, HTMLTemplate, HTMLTemplateGenerator } from "../deps.ts";
import { attributesAndContentFromArgs } from "../lib/util.ts";
import { attributeList } from "./element_helper.ts";
import { HTMLGlobalAttributes } from "./global_attributes.ts";

export type DfnAttributes = HTMLGlobalAttributes;

export function dfn(
  attributes: DfnAttributes,
  content?:
    | string
    | HTMLTemplate
    | (string | HTMLTemplate | HTMLTemplateGenerator)[],
): HTMLTemplateGenerator;

export function dfn(
  content: string | HTMLTemplate,
): HTMLTemplateGenerator;

export function dfn(...args: [unknown, unknown?]) {
  const { content, attributes } = attributesAndContentFromArgs<
    DfnAttributes
  >(...args);
  return html`<dfn ${
    attributeList<DfnAttributes>(attributes)
  }>${content}</dfn>`;
}
