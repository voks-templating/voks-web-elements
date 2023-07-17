import { html, HTMLTemplate, HTMLTemplateGenerator } from "../deps.ts";
import { attributesAndContentFromArgs } from "../lib/util.ts";
import { attributeList } from "./element_helper.ts";
import { HTMLGlobalAttributes } from "./global_attributes.ts";

export type DlAttributes = HTMLGlobalAttributes;

export function dl(
  attributes: DlAttributes,
  content?: string | HTMLTemplate,
): HTMLTemplateGenerator;

export function dl(
  content: string | HTMLTemplate,
): HTMLTemplateGenerator;

export function dl(...args: [unknown, unknown?]) {
  const { content, attributes } = attributesAndContentFromArgs<
    DlAttributes
  >(...args);
  return html`<dl ${attributeList<DlAttributes>(attributes)}>${content}</dl>`;
}
