import { html, HTMLTemplate } from "../deps.ts";
import { attributesAndContentFromArgs } from "../lib/util.ts";
import { attributeList } from "./element_helper.ts";
import { HTMLGlobalAttributes } from "./global_attributes.ts";
import { WebElementContent } from "./web_element_content.ts";

export type HtmlAttributes = {
  xmlns?: string;
} & HTMLGlobalAttributes;

export function htmlElement(
  attributes: HtmlAttributes,
  content?: WebElementContent,
): HTMLTemplate;

export function htmlElement(
  content?: WebElementContent,
): HTMLTemplate;

export function htmlElement(...args: [unknown, unknown?]) {
  const { content, attributes } = attributesAndContentFromArgs<
    HtmlAttributes
  >(...args);
  return html`<html${
    attributeList<HtmlAttributes>(attributes)
  }>${content}</html>`;
}
