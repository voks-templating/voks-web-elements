import { html, HTMLTemplateGenerator } from "../deps.ts";
import { attributesAndContentFromArgs } from "../lib/util.ts";
import { attributeList } from "./element_helper.ts";
import { HTMLGlobalAttributes } from "./global_attributes.ts";
import { WebElementContent } from "./web_element_content.ts";

export type OptgroupAttributes = {
  disabled?: boolean;
  label?: string;
} | HTMLGlobalAttributes;

export function optgroup(
  attributes: OptgroupAttributes,
  content?: WebElementContent,
): HTMLTemplateGenerator;

export function optgroup(
  content?: WebElementContent,
): HTMLTemplateGenerator;

export function optgroup(...args: [unknown, unknown?]) {
  const { content, attributes } = attributesAndContentFromArgs<
    OptgroupAttributes
  >(...args);
  return html`<optgroup ${
    attributeList<OptgroupAttributes>(attributes)
  }>${content}</optgroup>`;
}
