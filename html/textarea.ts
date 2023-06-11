import { html, HTMLTemplate } from "../deps.ts";
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

export const textarea = (
  content: string | HTMLTemplate,
  attributes: TextareaAttributes = {},
) =>
  html`<textarea ${
    attributeList<TextareaAttributes>(attributes)
  }>${content}</textarea>`;
