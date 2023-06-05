import { html, HTMLTemplate } from "../deps.ts";
import { attributeList } from "./element_helper.ts";
import { HTMLGlobalAttributes } from "./global_attributes.ts";

export type LiAttributes = {
  value?: number;
} | HTMLGlobalAttributes;

export interface LiElementOptions {
  classes?: string[];
  attributes?: LiAttributes;
}

export const li = (
  content: string | HTMLTemplate,
  { attributes, classes }: LiElementOptions = {},
) =>
  html`<li ${attributeList<LiAttributes>(attributes, classes)}>${content}</li>`;
