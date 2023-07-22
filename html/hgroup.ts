import { html, HTMLTemplate, HTMLTemplateGenerator } from "../deps.ts";
import { attributesAndContentFromArgs } from "../lib/util.ts";
import { attributeList } from "./element_helper.ts";
import { HTMLGlobalAttributes } from "./global_attributes.ts";

export type HgroupAttributes = HTMLGlobalAttributes;

export function hgroup(
  attributes: HgroupAttributes,
  content?: string | HTMLTemplate | (string | HTMLTemplate | HTMLTemplateGenerator)[],
): HTMLTemplateGenerator;

export function hgroup(
  content: string | HTMLTemplate,
): HTMLTemplateGenerator;

export function hgroup(...args: [unknown, unknown?]) {
  const { content, attributes } = attributesAndContentFromArgs<
    HgroupAttributes
  >(...args);
  return html`<hgroup ${
    attributeList<HgroupAttributes>(attributes)
  }>${content}</hgroup>`;
}
