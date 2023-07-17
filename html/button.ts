import { html, HTMLTemplate, HTMLTemplateGenerator } from "../deps.ts";
import { attributesAndContentFromArgs } from "../lib/util.ts";
import { attributeList } from "./element_helper.ts";
import { HTMLGlobalAttributes } from "./global_attributes.ts";
import {
  AutocompleteAttribute,
  DisabledAttribute,
  FormactionAttribute,
  FormAttribute,
  FormenctypeAttribute,
  FormmethodAttribute,
  FormnovalidateAttribute,
  FormtargetAttribute,
} from "./input_attributes.ts";

export type ButtonAttributes =
  | (
    & AutocompleteAttribute
    & DisabledAttribute
    & FormAttribute
    & FormactionAttribute
    & FormenctypeAttribute
    & FormmethodAttribute
    & FormnovalidateAttribute
    & FormtargetAttribute
  )
  | {
    name?: string;
    popovertarget?: string;
    popovertargetaction?: string;
    type?: string;
    value?: string;
  }
  | HTMLGlobalAttributes;

export function button(
  attributes: ButtonAttributes,
  content?: string | HTMLTemplate,
): HTMLTemplateGenerator;

export function button(
  content: string | HTMLTemplate,
): HTMLTemplateGenerator;

export function button(...args: [unknown, unknown?]) {
  const { content, attributes } = attributesAndContentFromArgs<
    ButtonAttributes
  >(...args);
  return html`<button ${
    attributeList<ButtonAttributes>(attributes)
  }>${content}</button>`;
}
