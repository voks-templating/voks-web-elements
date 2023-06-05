import { html, HTMLTemplate } from "../deps.ts";
import { attributeList } from "./element_helper.ts";
import { HTMLGlobalAttributes } from "./global_attributes.ts";

export type AsideAttributes = HTMLGlobalAttributes;

export interface AsideElementOptions {
  classes?: string[];
  attributes?: AsideAttributes;
}

export const aside = (
  content: string | HTMLTemplate,
  { attributes, classes }: AsideElementOptions = {},
) =>
  html`<aside ${
    attributeList<AsideAttributes>(attributes, classes)
  }>${content}</aside>`;
  