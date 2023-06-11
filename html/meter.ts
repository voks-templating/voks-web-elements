import { html, HTMLTemplate } from "../deps.ts";
import { attributeList } from "./element_helper.ts";
import { HTMLGlobalAttributes } from "./global_attributes.ts";

export type MeterAttributes = {
  value?: number;
  min?: number;
  max?: number;
  low?: number;
  high?: number;
  optimum?: number;
} | HTMLGlobalAttributes;

export const meter = (
  content: string | HTMLTemplate,
  attributes: MeterAttributes = {},
) =>
  html`<meter ${attributeList<MeterAttributes>(attributes)}>${content}</meter>`;
