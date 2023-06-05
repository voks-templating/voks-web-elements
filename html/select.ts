import { Format } from "https://deno.land/x/esbuild@v0.17.19/mod.js";
import { html, HTMLTemplate } from "../deps.ts";
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

export interface SelectElementOptions {
  classes?: string[];
  attributes?: SelectAttributes;
}

export const select = (
  content: string | HTMLTemplate,
  { attributes, classes }: SelectElementOptions = {},
) =>
  html`<select ${
    attributeList<SelectAttributes>(attributes, classes)
  }>${content}</select>`;
