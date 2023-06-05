import { html, HTMLTemplate } from "../deps.ts";
import { attributeList } from "./element_helper.ts";
import { HTMLGlobalAttributes } from "./global_attributes.ts";

export type LegendAttributes = HTMLGlobalAttributes;

export interface LegendElementOptions {
  classes?: string[];
  attributes?: LegendAttributes;
}

export const legend = (
  content: string | HTMLTemplate,
  { attributes, classes }: LegendElementOptions = {},
) =>html`<legend ${
  attributeList<LegendAttributes>(attributes, classes)
}>${content}</legend>`;

  