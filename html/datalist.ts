import { html, HTMLTemplate } from "../deps.ts";
import { attributeList } from "./element_helper.ts";
import { HTMLGlobalAttributes } from "./global_attributes.ts";

export type DatalistAttributes = HTMLGlobalAttributes;

export const datalist = (
  content: string | HTMLTemplate,
  attributes: DatalistAttributes = {},
) =>
  html`<datalist ${
    attributeList<DatalistAttributes>(attributes)
  }>${content}</datalist>`;
