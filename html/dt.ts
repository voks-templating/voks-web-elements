import { html, HTMLTemplate, HTMLTemplateGenerator } from "../deps.ts";
import { attributesAndContentFromArgs } from "../lib/util.ts";
import { attributeList } from "./element_helper.ts";
import { HTMLGlobalAttributes } from "./global_attributes.ts";

export type DtAttributes = HTMLGlobalAttributes;

export function dt(
  attributes: DtAttributes,
  content?: string | HTMLTemplate | (string | HTMLTemplate | HTMLTemplateGenerator)[],
): HTMLTemplateGenerator;

export function dt(
  content: string | HTMLTemplate,
): HTMLTemplateGenerator;

export function dt(...args: [unknown, unknown?]) {
  const { content, attributes } = attributesAndContentFromArgs<
    DtAttributes
  >(...args);
  return html`<dt ${attributeList<DtAttributes>(attributes)}>${content}</dt>`;
}
