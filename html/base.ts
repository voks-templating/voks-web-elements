import { html, HTMLTemplate } from "../deps.ts";
import { attributeList } from "./element_helper.ts";
import { HTMLGlobalAttributes } from "./global_attributes.ts";

export type BaseAttributes = {
  href?: string;
  target?: string;
} | HTMLGlobalAttributes;

export interface BaseElementOptions {
  classes?: string[];
  attributes?: BaseAttributes;
}

export const base = (
  { attributes, classes }: BaseElementOptions = {},
) => html`<base ${attributeList<BaseAttributes>(attributes, classes)} />`;
