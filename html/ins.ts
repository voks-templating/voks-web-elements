import { html, HTMLTemplate } from "../deps.ts";
import { attributeList } from "./element_helper.ts";
import { HTMLGlobalAttributes } from "./global_attributes.ts";

export type InsAttributes = {
  cite?: string;
  datetime?: string;
} | HTMLGlobalAttributes;

export interface InsElementOptions {
  classes?: string[];
  attributes?: InsAttributes;
}

export const ins = (
  content: string | HTMLTemplate,
  { attributes, classes }: InsElementOptions = {},
) =>
  html`<ins ${
    attributeList<InsAttributes>(attributes, classes)
  }>${content}</ins>`;
