import { html, HTMLTemplate } from "../deps.ts";
import { attributeList } from "./element_helper.ts";
import { HTMLGlobalAttributes } from "./global_attributes.ts";

export type SlotAttributes = HTMLGlobalAttributes;

export interface SlotElementOptions {
  classes?: string[];
  attributes?: SlotAttributes;
}

export const slot = (
  content: string | HTMLTemplate,
  { attributes, classes }: SlotElementOptions = {},
) =>html`<slot ${
  attributeList<SlotAttributes>(attributes, classes)
}>${content}</slot>`;

  