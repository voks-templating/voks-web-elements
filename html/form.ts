import { html, HTMLTemplate } from "../deps.ts";
import { attributeList } from "./element_helper.ts";
import { HTMLGlobalAttributes } from "./global_attributes.ts";

export type FormAttributes = HTMLGlobalAttributes;

export interface FormElementOptions {
  classes?: string[];
  attributes?: FormAttributes;
}

export const form = (
  content: string | HTMLTemplate,
  { attributes, classes }: FormElementOptions = {},
) =>
  html`<form ${
    attributeList<FormAttributes>(attributes, classes)
  }>${content}</form>`;
