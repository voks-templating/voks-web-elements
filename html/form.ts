import { html, HTMLTemplate, HTMLTemplateGenerator } from "../deps.ts";
import { attributesAndContentFromArgs } from "../lib/util.ts";
import { attributeList } from "./element_helper.ts";
import { HTMLGlobalAttributes } from "./global_attributes.ts";

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
} | HTMLGlobalAttributes;

export function form(
  attributes: FormAttributes,
  content?:
    | string
    | HTMLTemplate
    | (string | HTMLTemplate | HTMLTemplateGenerator)[],
): HTMLTemplateGenerator;

export function form(
  content: string | HTMLTemplate,
): HTMLTemplateGenerator;

export function form(...args: [unknown, unknown?]) {
  const { content, attributes } = attributesAndContentFromArgs<
    FormAttributes
  >(...args);
  return html`<form ${
    attributeList<FormAttributes>(attributes)
  }>${content}</form>`;
}
