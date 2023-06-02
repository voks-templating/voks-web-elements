import { html, HTMLTemplate } from "../deps.ts";
import { attributeList } from "./element_helper.ts";
import { HTMLGlobalAttributes } from "./global_attributes.ts";

export type AddressAttributes = HTMLGlobalAttributes;

export interface AddressElementOptions {
  classes?: string[];
  attributes?: AddressAttributes;
}

export const address = (
  content: string | HTMLTemplate,
  { attributes, classes }: AddressElementOptions = {},
) =>
  html`<address ${
    attributeList<AddressAttributes>(attributes, classes)
  }>${content}</address>`;
