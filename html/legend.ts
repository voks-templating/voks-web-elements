import { html, HTMLTemplate } from "../deps.ts";
import { attributeList } from "./element_helper.ts";
import { HTMLGlobalAttributes } from "./global_attributes.ts";

export type LegendAttributes = HTMLGlobalAttributes;

export const legend = (
  content: string | HTMLTemplate,
  attributes: LegendAttributes = {},
) =>
  html`<legend ${
    attributeList<LegendAttributes>(attributes)
  }>${content}</legend>`;
