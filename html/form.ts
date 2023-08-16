import { html, HTMLTemplate } from "../deps.ts";
import { attributesAndContentFromArgs } from "../lib/util.ts";
import { attributeList } from "./element_helper.ts";
import { HTMLGlobalAttributes } from "./global_attributes.ts";
import { WebElementContent } from "./web_element_content.ts";

export type FormAttributes = {
  acceptCharset?: string;
  action?: string;
  autocapitalize?: string;
  autocomplete?: string;
  enctype?: string;
  name?: string;
  rel?: string;
  target?: string;
  method?: string;
  novalidate?: boolean;
} & HTMLGlobalAttributes;

export function form(
  attributes: FormAttributes,
  content?: WebElementContent,
): HTMLTemplate;

export function form(
  content?: WebElementContent,
): HTMLTemplate;

export function form(...args: [unknown, unknown?]) {
  const { content, attributes } = attributesAndContentFromArgs<
    FormAttributes
  >(...args);
  return html`<form${
    attributeList<FormAttributes>(attributes)
  }>${content}</form>`;
}
