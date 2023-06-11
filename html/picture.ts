import { html, HTMLTemplate } from "../deps.ts";
import { attributeList } from "./element_helper.ts";
import { HTMLGlobalAttributes } from "./global_attributes.ts";

export type PictureAttributes = HTMLGlobalAttributes;

export const picture = (
  content: string | HTMLTemplate,
  attributes: PictureAttributes = {},
) =>
  html`<picture ${
    attributeList<PictureAttributes>(attributes)
  }>${content}</picture>`;
