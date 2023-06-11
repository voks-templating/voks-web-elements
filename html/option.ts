import { html, HTMLTemplate } from "../deps.ts";
import { attributeList } from "./element_helper.ts";
import { HTMLGlobalAttributes } from "./global_attributes.ts";

export type OptionAttributes = {
  disabled?: boolean;
  label?: string;
  selected?: boolean;
  value?: string | number;
} | HTMLGlobalAttributes;

export const option = (
  content: string | HTMLTemplate,
  attributes: OptionAttributes = {},
) =>
  html`<option ${
    attributeList<OptionAttributes>(attributes)
  }>${content}</option>`;
