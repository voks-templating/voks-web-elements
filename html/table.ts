import { html, HTMLTemplate } from "../deps.ts";
import { attributeList } from "./element_helper.ts";
import { HTMLGlobalAttributes } from "./global_attributes.ts";

export type TableAttributes = HTMLGlobalAttributes;

export interface TableElementOptions {
  classes?: string[];
  attributes?: TableAttributes;
}

export const table = (
  content: string | HTMLTemplate,
  { attributes, classes }: TableElementOptions = {},
) =>html`<table ${
  attributeList<TableAttributes>(attributes, classes)
}>${content}</table>`;

  