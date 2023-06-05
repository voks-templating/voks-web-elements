import { html, HTMLTemplate } from "../deps.ts";
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

export interface ButtonElementOptions {
  classes?: string[];
  attributes?: ButtonAttributes;
}

export const button = (
  content: string | HTMLTemplate,
  { attributes, classes }: ButtonElementOptions = {},
) =>
  html`<button ${
    attributeList<ButtonAttributes>(attributes, classes)
  }>${content}</button>`;
