import { html, HTMLTemplate, HTMLTemplateGenerator } from "../deps.ts";
import { attributesAndContentFromArgs } from "../lib/util.ts";
import { attributeList } from "./element_helper.ts";
import { HTMLGlobalAttributes } from "./global_attributes.ts";

export type CanvasAttributes = {
  height?: number;
  width?: number;
} | HTMLGlobalAttributes;

export function canvas(
  attributes: CanvasAttributes,
  content?: string | HTMLTemplate,
): HTMLTemplateGenerator;

export function canvas(
  content: string | HTMLTemplate,
): HTMLTemplateGenerator;

export function canvas(...args: [unknown, unknown?]) {
  const { content, attributes } = attributesAndContentFromArgs<
    CanvasAttributes
  >(...args);
  return html`<canvas ${
    attributeList<CanvasAttributes>(attributes)
  }>${content}</canvas>`;
}
