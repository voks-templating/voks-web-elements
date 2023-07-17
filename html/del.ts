import { html, HTMLTemplate, HTMLTemplateGenerator } from "../deps.ts";
import { attributesAndContentFromArgs } from "../lib/util.ts";
import { attributeList } from "./element_helper.ts";
import { HTMLGlobalAttributes } from "./global_attributes.ts";

export type DelAttributes = {
  cite?: string;
  datetime?: string;
} | HTMLGlobalAttributes;

export function del(
  attributes: DelAttributes,
  content?: string | HTMLTemplate,
): HTMLTemplateGenerator;

export function del(
  content: string | HTMLTemplate,
): HTMLTemplateGenerator;

export function del(...args: [unknown, unknown?]) {
  const { content, attributes } = attributesAndContentFromArgs<
    DelAttributes
  >(...args);
  return html`<del ${
    attributeList<DelAttributes>(attributes)
  }>${content}</del>`;
}
