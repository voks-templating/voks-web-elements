import { html, HTMLTemplate } from "../deps.ts";
import { attributeList } from "./element_helper.ts";
import { HTMLGlobalAttributes } from "./global_attributes.ts";

export type CodeAttributes = HTMLGlobalAttributes;

export interface CodeElementOptions {
  classes?: string[];
  attributes?: CodeAttributes;
}

export const code = (
  content: string | HTMLTemplate,
  { attributes, classes }: CodeElementOptions = {},
) =>
  html`<code ${
    attributeList<CodeAttributes>(attributes, classes)
  }>${content}</code>`;
