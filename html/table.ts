import { html, HTMLTemplate } from "../deps.ts";
import { attributeList } from "./element_helper.ts";
import { HTMLGlobalAttributes } from "./global_attributes.ts";

export type TableAttributes = HTMLGlobalAttributes;

export const table = (
  content: string | HTMLTemplate,
  attributes: TableAttributes = {},
) =>
  html`<table ${attributeList<TableAttributes>(attributes)}>${content}</table>`;
