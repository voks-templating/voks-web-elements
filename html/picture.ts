import { html, HTMLTemplate } from "../deps.ts";
import { attributeList } from "./element_helper.ts";
import { HTMLGlobalAttributes } from "./global_attributes.ts";

export type PictureAttributes = HTMLGlobalAttributes;

export interface PictureElementOptions {
  classes?: string[];
  attributes?: PictureAttributes;
}

export const picture = (
  content: string | HTMLTemplate,
  { attributes, classes }: PictureElementOptions = {},
) =>html`<picture ${
  attributeList<PictureAttributes>(attributes, classes)
}>${content}</picture>`;

  