import { html, HTMLTemplate } from "../deps.ts";
import { attributeList } from "./element_helper.ts";
import { HTMLGlobalAttributes } from "./global_attributes.ts";

export type TfootAttributes = HTMLGlobalAttributes;

export interface TfootElementOptions {
  classes?: string[];
  attributes?: TfootAttributes;
}

export const tfoot = (
  content: string | HTMLTemplate,
  { attributes, classes }: TfootElementOptions = {},
) =>
  html`<tfoot ${
    attributeList<TfootAttributes>(attributes, classes)
  }>${content}</tfoot>`;
