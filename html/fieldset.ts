import { html, HTMLTemplate } from "../deps.ts";
import { attributeList } from "./element_helper.ts";
import { HTMLGlobalAttributes } from "./global_attributes.ts";

export type FieldsetAttributes = HTMLGlobalAttributes;

export interface FieldsetElementOptions {
  classes?: string[];
  attributes?: FieldsetAttributes;
}

export const fieldset = (
  content: string | HTMLTemplate,
  { attributes, classes }: FieldsetElementOptions = {},
) =>html`<fieldset ${
  attributeList<FieldsetAttributes>(attributes, classes)
}>${content}</fieldset>`;

  