import { html, HTMLTemplate } from "../deps.ts";
import { attributeList } from "./element_helper.ts";
import { HTMLGlobalAttributes } from "./global_attributes.ts";

export type VideoAttributes = HTMLGlobalAttributes;

export interface VideoElementOptions {
  classes?: string[];
  attributes?: VideoAttributes;
}

export const video = (
  content: string | HTMLTemplate,
  { attributes, classes }: VideoElementOptions = {},
) =>html`<video ${
  attributeList<VideoAttributes>(attributes, classes)
}>${content}</video>`;

  