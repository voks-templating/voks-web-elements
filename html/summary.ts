import { html, HTMLTemplate } from "../deps.ts";
import { attributeList } from "./element_helper.ts";
import { HTMLGlobalAttributes } from "./global_attributes.ts";

export type SummaryAttributes = HTMLGlobalAttributes;

export interface SummaryElementOptions {
  classes?: string[];
  attributes?: SummaryAttributes;
}

export const summary = (
  content: string | HTMLTemplate,
  { attributes, classes }: SummaryElementOptions = {},
) =>
  html`<summary ${
    attributeList<SummaryAttributes>(attributes, classes)
  }>${content}</summary>`;
