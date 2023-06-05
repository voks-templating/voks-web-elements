import { html, HTMLTemplate } from "../deps.ts";
import { attributeList } from "./element_helper.ts";
import { HTMLGlobalAttributes } from "./global_attributes.ts";

export type StyleAttributes = {
  media?: string;
  nonce?: string;
  title?: string;
} | HTMLGlobalAttributes;

export interface StyleElementOptions {
  classes?: string[];
  attributes?: StyleAttributes;
}

export const style = (
  content: string | HTMLTemplate,
  { attributes, classes }: StyleElementOptions = {},
) =>
  html`<style ${
    attributeList<StyleAttributes>(attributes, classes)
  }>${content}</style>`;
