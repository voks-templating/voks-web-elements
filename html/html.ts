import { html, HTMLTemplate, HTMLTemplateGenerator } from "../deps.ts";
import { attributesAndContentFromArgs } from "../lib/util.ts";
import { attributeList } from "./element_helper.ts";
import { HTMLGlobalAttributes } from "./global_attributes.ts";

export type HtmlAttributes = {
  xmlns?: string;
} | HTMLGlobalAttributes;

export function htmlElement(
  attributes: HtmlAttributes,
  content?: string | HTMLTemplate,
): HTMLTemplateGenerator;

export function htmlElement(
  content: string | HTMLTemplate,
): HTMLTemplateGenerator;

export function htmlElement(...args: [unknown, unknown?]) {
  const { content, attributes } = attributesAndContentFromArgs<
    HtmlAttributes
  >(...args);
  return html`<html ${
    attributeList<HtmlAttributes>(attributes)
  }>${content}</html>`;
}