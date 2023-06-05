import { html, HTMLTemplate } from "../deps.ts";
import { attributeList } from "./element_helper.ts";
import { HTMLGlobalAttributes } from "./global_attributes.ts";

export type TextareaAttributes = HTMLGlobalAttributes;

export interface TextareaElementOptions {
  classes?: string[];
  attributes?: TextareaAttributes;
}

export const textarea = (
  content: string | HTMLTemplate,
  { attributes, classes }: TextareaElementOptions = {},
) =>html`<textarea ${
  attributeList<TextareaAttributes>(attributes, classes)
}>${content}</textarea>`;

  