import { html, HTMLTemplateGenerator } from "../deps.ts";
import { attributesAndContentFromArgs } from "../lib/util.ts";
import { attributeList } from "./element_helper.ts";
import { HTMLGlobalAttributes } from "./global_attributes.ts";
import { WebElementContent } from "./web_element_content.ts";

export type HgroupAttributes = HTMLGlobalAttributes;

export function hgroup(
  attributes: HgroupAttributes,
  content?: WebElementContent,
): HTMLTemplateGenerator;

export function hgroup(
  content?: WebElementContent,
): HTMLTemplateGenerator;

export function hgroup(...args: [unknown, unknown?]) {
  const { content, attributes } = attributesAndContentFromArgs<
    HgroupAttributes
  >(...args);
  return html`<hgroup${
    attributeList<HgroupAttributes>(attributes)
  }>${content}</hgroup>`;
}
