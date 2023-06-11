import { html, HTMLTemplate } from "../deps.ts";
import { attributeList } from "./element_helper.ts";
import { HTMLGlobalAttributes } from "./global_attributes.ts";

export type CanvasAttributes = {
  height?: number;
  width?: number;
} | HTMLGlobalAttributes;

export const canvas = (
  content: string | HTMLTemplate,
  attributes: CanvasAttributes = {},
) =>
  html`<canvas ${
    attributeList<CanvasAttributes>(attributes)
  }>${content}</canvas>`;
