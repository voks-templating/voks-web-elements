import { html, HTMLTemplate } from "../deps.ts";
import { attributeList } from "./element_helper.ts";
import { HTMLGlobalAttributes } from "./global_attributes.ts";

export type SummaryAttributes = HTMLGlobalAttributes;

export const summary = (
  content: string | HTMLTemplate,
  attributes: SummaryAttributes = {},
) =>
  html`<summary ${
    attributeList<SummaryAttributes>(attributes)
  }>${content}</summary>`;
