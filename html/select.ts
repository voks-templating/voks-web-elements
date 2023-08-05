import { html, HTMLTemplateGenerator } from "../deps.ts";
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
import { WebElementContent } from "./web_element_content.ts";

export type SelectAttributes =
  & HTMLGlobalAttributes
  & RequiredAttribute
  & AutocompleteAttribute
  & { autofocus?: boolean }
  & DisabledAttribute
  & FormAttribute
  & MultipleAttribute
  & NameAttribute
  & SizeAttribute;

export function select(
  attributes: SelectAttributes,
  content?: WebElementContent,
): HTMLTemplateGenerator;

export function select(
  content?: WebElementContent,
): HTMLTemplateGenerator;

export function select(...args: [unknown, unknown?]) {
  const { content, attributes } = attributesAndContentFromArgs<
    SelectAttributes
  >(...args);
  return html`<select${
    attributeList<SelectAttributes>(attributes)
  }>${content}</select>`;
}
