import { html, HTMLTemplate } from "../deps.ts";
import { attributeList } from "./element_helper.ts";
import { HTMLGlobalAttributes } from "./global_attributes.ts";

export type MeterAttributes = HTMLGlobalAttributes;

export interface MeterElementOptions {
  classes?: string[];
  attributes?: MeterAttributes;
}

export const meter = (
  content: string | HTMLTemplate,
  { attributes, classes }: MeterElementOptions = {},
) =>html`<meter ${
  attributeList<MeterAttributes>(attributes, classes)
}>${content}</meter>`;

  