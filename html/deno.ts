import { html } from "../deps.ts";
import { attributeList } from "./element_helper.ts";
import { HTMLGlobalAttributes } from "./global_attributes.ts";

export type DenoAttributes = HTMLGlobalAttributes;

export interface DenoElementOptions {
  classes?: string[];
  attributes?: DenoAttributes;
}

export const deno = (
  { attributes, classes }: DenoElementOptions = {},
) =>html`<deno ${
  attributeList<DenoAttributes>(attributes, classes)
}></deno>`;

  