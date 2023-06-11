import { html, HTMLTemplate } from "../deps.ts";
import { attributeList } from "./element_helper.ts";
import { HTMLGlobalAttributes } from "./global_attributes.ts";

export type OutputAttributes = {
  for?: string;
  form?: string;
  name: string;
} | HTMLGlobalAttributes;

export const output = (
  content: string | HTMLTemplate,
  attributes: OutputAttributes = {},
) =>
  html`<output ${
    attributeList<OutputAttributes>(attributes)
  }>${content}</output>`;
