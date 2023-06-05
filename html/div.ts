import { html, HTMLTemplate } from "../deps.ts";
import { attributeList } from "./element_helper.ts";
import { HTMLGlobalAttributes } from "./global_attributes.ts";

export type DivAttributes = HTMLGlobalAttributes;

export interface DivElementOptions {
  classes?: string[];
  attributes?: DivAttributes;
}

export const div = (
  content: string | HTMLTemplate,
  { attributes, classes }: DivElementOptions = {},
) =>
  html`<div ${
    attributeList<DivAttributes>(attributes, classes)
  }>${content}</div>`;
