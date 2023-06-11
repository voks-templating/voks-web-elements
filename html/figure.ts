import { html, HTMLTemplate } from "../deps.ts";
import { attributeList } from "./element_helper.ts";
import { HTMLGlobalAttributes } from "./global_attributes.ts";

export type FigureAttributes = HTMLGlobalAttributes;

export const figure = (
  content: string | HTMLTemplate,
  attributes: FigureAttributes = {},
) =>
  html`<figure ${
    attributeList<FigureAttributes>(attributes)
  }>${content}</figure>`;
