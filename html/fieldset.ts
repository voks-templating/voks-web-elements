import { html, HTMLTemplate } from "../deps.ts";
import { attributeList } from "./element_helper.ts";
import { HTMLGlobalAttributes } from "./global_attributes.ts";

export type FieldsetAttributes = {
  disabled?: boolean;
  form?: string;
  name?: string;
} | HTMLGlobalAttributes;

export const fieldset = (
  content: string | HTMLTemplate,
  attributes: FieldsetAttributes = {},
) =>
  html`<fieldset ${
    attributeList<FieldsetAttributes>(attributes)
  }>${content}</fieldset>`;
