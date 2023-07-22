import { html, HTMLTemplate, HTMLTemplateGenerator } from "../deps.ts";
import { attributesAndContentFromArgs } from "../lib/util.ts";
import { attributeList } from "./element_helper.ts";
import { HTMLGlobalAttributes } from "./global_attributes.ts";

export type TbodyAttributes = HTMLGlobalAttributes;

export function tbody(
  attributes: TbodyAttributes,
  content?:
    | string
    | HTMLTemplate
    | (string | HTMLTemplate | HTMLTemplateGenerator)[],
): HTMLTemplateGenerator;

export function tbody(
  content?:
    | string
    | HTMLTemplate
    | (string | HTMLTemplate | HTMLTemplateGenerator)[],
): HTMLTemplateGenerator;

export function tbody(...args: [unknown, unknown?]) {
  const { content, attributes } = attributesAndContentFromArgs<
    TbodyAttributes
  >(...args);
  return html`<tbody ${
    attributeList<TbodyAttributes>(attributes)
  }>${content}</tbody>`;
}
