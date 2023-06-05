import { Format } from "https://deno.land/x/esbuild@v0.17.19/mod.js";
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

export interface TextareaElementOptions {
  classes?: string[];
  attributes?: TextareaAttributes;
}

export const textarea = (
  content: string | HTMLTemplate,
  { attributes, classes }: TextareaElementOptions = {},
) =>
  html`<textarea ${
    attributeList<TextareaAttributes>(attributes, classes)
  }>${content}</textarea>`;
