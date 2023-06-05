import { html, HTMLTemplate } from "../deps.ts";
import { attributeList } from "./element_helper.ts";
import { HTMLGlobalAttributes } from "./global_attributes.ts";

export type CanvasAttributes = {
  height?: number;
  width?: number;
} | HTMLGlobalAttributes;

export interface CanvasElementOptions {
  classes?: string[];
  attributes?: CanvasAttributes;
}

export const canvas = (
  content: string | HTMLTemplate,
  { attributes, classes }: CanvasElementOptions = {},
) =>
  html`<canvas ${
    attributeList<CanvasAttributes>(attributes, classes)
  }>${content}</canvas>`;
