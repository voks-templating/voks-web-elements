import { html, HTMLTemplateGenerator } from "../deps.ts";
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
import { WebElementContent } from "./web_element_content.ts";

export type TextareaAttributes =
  & AutocompleteAttribute
  & { autofocus?: boolean }
  & { cols?: number }
  & DisabledAttribute
  & FormAttribute
  & LengthAttributes
  & { name?: string }
  & PlaceholderAttribute
  & HTMLGlobalAttributes;

export function textarea(
  attributes: TextareaAttributes,
  content?: WebElementContent,
): HTMLTemplateGenerator;

export function textarea(
  content?: WebElementContent,
): HTMLTemplateGenerator;

export function textarea(...args: [unknown, unknown?]) {
  const { content, attributes } = attributesAndContentFromArgs<
    TextareaAttributes
  >(...args);
  return html`<textarea${
    attributeList<TextareaAttributes>(attributes)
  }>${content}</textarea>`;
}
