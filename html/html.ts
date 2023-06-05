import { html, HTMLTemplate } from "../deps.ts";
import { attributeList } from "./element_helper.ts";
import { HTMLGlobalAttributes } from "./global_attributes.ts";

export type HtmlAttributes = {
  xmlns?: string;
} | HTMLGlobalAttributes;

export interface HtmlElementOptions {
  classes?: string[];
  attributes?: HtmlAttributes;
}

export const htmlElement = (
  content: string | HTMLTemplate,
  { attributes, classes }: HtmlElementOptions = {},
) =>
  html`<html ${
    attributeList<HtmlAttributes>(attributes, classes)
  }>${content}</html>`;
