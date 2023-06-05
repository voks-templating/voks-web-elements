import { html, HTMLTemplate } from "../deps.ts";
import { attributeList } from "./element_helper.ts";
import { HTMLGlobalAttributes } from "./global_attributes.ts";

export type DtAttributes = HTMLGlobalAttributes;

export interface DtElementOptions {
  classes?: string[];
  attributes?: DtAttributes;
}

export const dt = (
  content: string | HTMLTemplate,
  { attributes, classes }: DtElementOptions = {},
) =>html`<dt ${
  attributeList<DtAttributes>(attributes, classes)
}>${content}</dt>`;

  