import { html, HTMLTemplate, HTMLTemplateGenerator } from "../deps.ts";
import { attributesAndContentFromArgs } from "../lib/util.ts";
import { attributeList } from "./element_helper.ts";
import { HTMLGlobalAttributes } from "./global_attributes.ts";
import {
  AutocompleteAttribute,
  DisabledAttribute,
  FormAttribute,
  MultipleAttribute,
  NameAttribute,
  RequiredAttribute,
  SizeAttribute,
} from "./input_attributes.ts";

export type SelectAttributes =
  | RequiredAttribute
  | AutocompleteAttribute
  | { autofocus?: boolean }
  | DisabledAttribute
  | FormAttribute
  | MultipleAttribute
  | NameAttribute
  | SizeAttribute
  | HTMLGlobalAttributes;

export function select(
  attributes: SelectAttributes,
  content?:
    | string
    | HTMLTemplate
    | (string | HTMLTemplate | HTMLTemplateGenerator)[],
): HTMLTemplateGenerator;

export function select(
  content: string | HTMLTemplate,
): HTMLTemplateGenerator;

export function select(...args: [unknown, unknown?]) {
  const { content, attributes } = attributesAndContentFromArgs<
    SelectAttributes
  >(...args);
  return html`<select ${
    attributeList<SelectAttributes>(attributes)
  }>${content}</select>`;
}
