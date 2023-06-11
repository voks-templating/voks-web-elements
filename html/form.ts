import { html, HTMLTemplate } from "../deps.ts";
import { attributeList } from "./element_helper.ts";
import { HTMLGlobalAttributes } from "./global_attributes.ts";

export type FormAttributes = {
  acceptCharset?: string;
  action?: string;
  autocapitalize?: string;
  autocomplete?: string;
  enctype?: string;
  name?: string;
  rel?: string;
  target?: string;
  method?: string;
  novalidate?: boolean;
} | HTMLGlobalAttributes;

export const form = (
  content: string | HTMLTemplate,
  attributes: FormAttributes = {},
) => html`<form ${attributeList<FormAttributes>(attributes)}>${content}</form>`;
