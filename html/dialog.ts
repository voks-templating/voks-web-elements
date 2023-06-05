import { html, HTMLTemplate } from "../deps.ts";
import { attributeList } from "./element_helper.ts";
import { HTMLGlobalAttributes } from "./global_attributes.ts";

export type DialogAttributes = {
  open?: boolean;
} | Omit<HTMLGlobalAttributes, "tabindex">;

export interface DialogElementOptions {
  classes?: string[];
  attributes?: DialogAttributes;
}

export const dialog = (
  content: string | HTMLTemplate,
  { attributes, classes }: DialogElementOptions = {},
) =>
  html`<dialog ${
    attributeList<DialogAttributes>(attributes, classes)
  }>${content}</dialog>`;
