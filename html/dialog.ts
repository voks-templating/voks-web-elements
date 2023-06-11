import { html, HTMLTemplate } from "../deps.ts";
import { attributeList } from "./element_helper.ts";
import { HTMLGlobalAttributes } from "./global_attributes.ts";

export type DialogAttributes = {
  open?: boolean;
} | Omit<HTMLGlobalAttributes, "tabindex">;

export const dialog = (
  content: string | HTMLTemplate,
  attributes: DialogAttributes = {},
) =>
  html`<dialog ${
    attributeList<DialogAttributes>(attributes)
  }>${content}</dialog>`;
