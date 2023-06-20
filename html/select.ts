import { html, HTMLTemplate, minify } from "../deps.ts";
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

export const select = (
  content: string | HTMLTemplate,
  attributes: SelectAttributes = {},
) =>
  html`<select ${
    attributeList<SelectAttributes>(attributes)
  }>${content}</select>`;
