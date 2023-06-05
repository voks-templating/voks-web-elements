import { html, HTMLTemplate } from "../deps.ts";
import { attributeList } from "./element_helper.ts";
import { HTMLGlobalAttributes } from "./global_attributes.ts";

export type DatalistAttributes = HTMLGlobalAttributes;

export interface DatalistElementOptions {
  classes?: string[];
  attributes?: DatalistAttributes;
}

export const datalist = (
  content: string | HTMLTemplate,
  { attributes, classes }: DatalistElementOptions = {},
) =>
  html`<datalist ${
    attributeList<DatalistAttributes>(attributes, classes)
  }>${content}</datalist>`;
