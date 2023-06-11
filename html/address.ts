import { html, HTMLTemplate } from "../deps.ts";
import { attributeList } from "./element_helper.ts";
import { HTMLGlobalAttributes } from "./global_attributes.ts";

export type AddressAttributes = HTMLGlobalAttributes;

export const address = (
  content: string | HTMLTemplate,
  attributes: AddressAttributes = {},
) =>
  html`<address ${
    attributeList<AddressAttributes>(attributes)
  }>${content}</address>`;
