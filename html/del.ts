import { html, HTMLTemplate } from "../deps.ts";
import { attributeList } from "./element_helper.ts";
import { HTMLGlobalAttributes } from "./global_attributes.ts";

export type DelAttributes = {
  cite?: string;
  datetime?: string;
} | HTMLGlobalAttributes;

export interface DelElementOptions {
  classes?: string[];
  attributes?: DelAttributes;
}

export const del = (
  content: string | HTMLTemplate,
  { attributes, classes }: DelElementOptions = {},
) =>
  html`<del ${
    attributeList<DelAttributes>(attributes, classes)
  }>${content}</del>`;
