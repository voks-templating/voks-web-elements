import { html, HTMLTemplate, HTMLTemplateGenerator } from "../deps.ts";
import { attributesAndContentFromArgs } from "../lib/util.ts";
import { attributeList } from "./element_helper.ts";
import { HTMLGlobalAttributes } from "./global_attributes.ts";

export type MapAttributes = {
  name?: string;
} | HTMLGlobalAttributes;

export function map(
  attributes: MapAttributes,
  content?:
    | string
    | HTMLTemplate
    | (string | HTMLTemplate | HTMLTemplateGenerator)[],
): HTMLTemplateGenerator;

export function map(
  content?:
    | string
    | HTMLTemplate
    | (string | HTMLTemplate | HTMLTemplateGenerator)[],
): HTMLTemplateGenerator;

export function map(...args: [unknown, unknown?]) {
  const { content, attributes } = attributesAndContentFromArgs<
    MapAttributes
  >(...args);
  return html`<map ${
    attributeList<MapAttributes>(attributes)
  }>${content}</map>`;
}
