import { html, HTMLTemplate } from "../deps.ts";
import { attributeList } from "./element_helper.ts";
import { HTMLGlobalAttributes } from "./global_attributes.ts";

export type ProgressAttributes = {
  max?: number;
  value?: number;
} | HTMLGlobalAttributes;

export const progress = (
  content: string | HTMLTemplate,
  attributes: ProgressAttributes = {},
) =>
  html`<progress ${
    attributeList<ProgressAttributes>(attributes)
  }>${content}</progress>`;
