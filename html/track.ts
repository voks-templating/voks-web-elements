import { html, HTMLTemplate } from "../deps.ts";
import { attributeList } from "./element_helper.ts";
import { HTMLGlobalAttributes } from "./global_attributes.ts";

export type TrackAttributes = HTMLGlobalAttributes;

export interface TrackElementOptions {
  classes?: string[];
  attributes?: TrackAttributes;
}

export const track = (
  content: string | HTMLTemplate,
  { attributes, classes }: TrackElementOptions = {},
) =>html`<track ${
  attributeList<TrackAttributes>(attributes, classes)
}>${content}</track>`;

  