import { html, HTMLTemplate, HTMLTemplateGenerator } from "../deps.ts";
import { attributesAndContentFromArgs } from "../lib/util.ts";
import { attributeList } from "./element_helper.ts";
import { HTMLGlobalAttributes } from "./global_attributes.ts";

export type LiAttributes = {
  value?: number;
} | HTMLGlobalAttributes;

export function li(
  attributes: LiAttributes,
  content?: string | HTMLTemplate | (string | HTMLTemplate | HTMLTemplateGenerator)[],
): HTMLTemplateGenerator;

export function li(
  content: string | HTMLTemplate,
): HTMLTemplateGenerator;

export function li(...args: [unknown, unknown?]) {
  const { content, attributes } = attributesAndContentFromArgs<
    LiAttributes
  >(...args);
  return html`<li ${attributeList<LiAttributes>(attributes)}>${content}</li>`;
}
