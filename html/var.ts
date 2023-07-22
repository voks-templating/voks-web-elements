import { html, HTMLTemplate, HTMLTemplateGenerator } from "../deps.ts";
import { attributesAndContentFromArgs } from "../lib/util.ts";
import { attributeList } from "./element_helper.ts";
import { HTMLGlobalAttributes } from "./global_attributes.ts";

export type VarAttributes = HTMLGlobalAttributes;

export function variable(
  attributes: VarAttributes,
  content?:
    | string
    | HTMLTemplate
    | (string | HTMLTemplate | HTMLTemplateGenerator)[],
): HTMLTemplateGenerator;

export function variable(
  content:
    | string
    | HTMLTemplate
    | (string | HTMLTemplate | HTMLTemplateGenerator)[],
): HTMLTemplateGenerator;

export function variable(...args: [unknown, unknown?]) {
  const { content, attributes } = attributesAndContentFromArgs<
    VarAttributes
  >(...args);
  return html`<var ${
    attributeList<VarAttributes>(attributes)
  }>${content}</var>`;
}
