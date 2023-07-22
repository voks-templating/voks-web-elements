import { html, HTMLTemplate, HTMLTemplateGenerator } from "../deps.ts";
import { attributesAndContentFromArgs } from "../lib/util.ts";
import { attributeList } from "./element_helper.ts";
import { HTMLGlobalAttributes } from "./global_attributes.ts";

export type TfootAttributes = HTMLGlobalAttributes;

export function tfoot(
  attributes: TfootAttributes,
  content?: string | HTMLTemplate | (string | HTMLTemplate | HTMLTemplateGenerator)[],
): HTMLTemplateGenerator;

export function tfoot(
  content: string | HTMLTemplate,
): HTMLTemplateGenerator;

export function tfoot(...args: [unknown, unknown?]) {
  const { content, attributes } = attributesAndContentFromArgs<
    TfootAttributes
  >(...args);
  return html`<tfoot ${
    attributeList<TfootAttributes>(attributes)
  }>${content}</tfoot>`;
}
