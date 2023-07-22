import { html, HTMLTemplate, HTMLTemplateGenerator } from "../deps.ts";
import { attributesAndContentFromArgs } from "../lib/util.ts";
import { attributeList } from "./element_helper.ts";
import { HTMLGlobalAttributes } from "./global_attributes.ts";
import {
  AutocompleteAttribute,
  DisabledAttribute,
  FormAttribute,
  LengthAttributes,
  PlaceholderAttribute,
} from "./input_attributes.ts";

export type TextareaAttributes =
  | AutocompleteAttribute
  | { autofocus?: boolean }
  | { cols?: number }
  | DisabledAttribute
  | FormAttribute
  | LengthAttributes
  | { name?: string }
  | PlaceholderAttribute
  | HTMLGlobalAttributes;

export function textarea(
  attributes: TextareaAttributes,
  content?:
    | string
    | HTMLTemplate
    | (string | HTMLTemplate | HTMLTemplateGenerator)[],
): HTMLTemplateGenerator;

export function textarea(
  content:
    | string
    | HTMLTemplate
    | (string | HTMLTemplate | HTMLTemplateGenerator)[],
): HTMLTemplateGenerator;

export function textarea(...args: [unknown, unknown?]) {
  const { content, attributes } = attributesAndContentFromArgs<
    TextareaAttributes
  >(...args);
  return html`<textarea ${
    attributeList<TextareaAttributes>(attributes)
  }>${content}</textarea>`;
}
