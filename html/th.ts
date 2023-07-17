import { html, HTMLTemplate, HTMLTemplateGenerator } from "../deps.ts";
import { attributesAndContentFromArgs } from "../lib/util.ts";
import { attributeList } from "./element_helper.ts";
import { HTMLGlobalAttributes } from "./global_attributes.ts";

export type ThAttributes = {
  abbr?: string;
  colspan?: number;
  headers?: string;
  rowspan?: number;
  scope?: string;
} | HTMLGlobalAttributes;

export function th(
  attributes: ThAttributes,
  content?: string | HTMLTemplate,
): HTMLTemplateGenerator;

export function th(
  content: string | HTMLTemplate,
): HTMLTemplateGenerator;

export function th(...args: [unknown, unknown?]) {
  const { content, attributes } = attributesAndContentFromArgs<
    ThAttributes
  >(...args);
  return html`<th ${attributeList<ThAttributes>(attributes)}>${content}</th>`;
}
