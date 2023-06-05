import { html, HTMLTemplate } from "../deps.ts";
import { attributeList } from "./element_helper.ts";
import { HTMLGlobalAttributes } from "./global_attributes.ts";

export type FigureAttributes = HTMLGlobalAttributes;

export interface FigureElementOptions {
  classes?: string[];
  attributes?: FigureAttributes;
}

export const figure = (
  content: string | HTMLTemplate,
  { attributes, classes }: FigureElementOptions = {},
) =>
  html`<figure ${
    attributeList<FigureAttributes>(attributes, classes)
  }>${content}</figure>`;
