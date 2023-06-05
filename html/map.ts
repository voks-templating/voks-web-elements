import { html, HTMLTemplate } from "../deps.ts";
import { attributeList } from "./element_helper.ts";
import { HTMLGlobalAttributes } from "./global_attributes.ts";

export type MapAttributes = {
  name?: string;
} | HTMLGlobalAttributes;

export interface MapElementOptions {
  classes?: string[];
  attributes?: MapAttributes;
}

export const map = (
  content: string | HTMLTemplate,
  { attributes, classes }: MapElementOptions = {},
) =>
  html`<map ${
    attributeList<MapAttributes>(attributes, classes)
  }>${content}</map>`;
