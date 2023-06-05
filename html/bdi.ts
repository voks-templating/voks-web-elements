import { html, HTMLTemplate } from "../deps.ts";
import { attributeList } from "./element_helper.ts";
import { HTMLGlobalAttributes } from "./global_attributes.ts";

export type BdiAttributes = HTMLGlobalAttributes;

export interface BdiElementOptions {
  classes?: string[];
  attributes?: BdiAttributes;
}

export const bdi = (
  content: string | HTMLTemplate,
  { attributes, classes }: BdiElementOptions = {},
) =>html`<bdi ${
  attributeList<BdiAttributes>(attributes, classes)
}>${content}</bdi>`;

  