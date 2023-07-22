import { html, HTMLTemplateGenerator } from "../deps.ts";
import { attributesAndContentFromArgs } from "../lib/util.ts";
import { attributeList } from "./element_helper.ts";
import { HTMLGlobalAttributes } from "./global_attributes.ts";
import { WebElementContent } from "./web_element_content.ts";

export type OptionAttributes = {
  disabled?: boolean;
  label?: string;
  selected?: boolean;
  value?: string | number;
} | HTMLGlobalAttributes;

export function option(
  attributes: OptionAttributes,
  content?: WebElementContent,
): HTMLTemplateGenerator;

export function option(
  content?: WebElementContent,
): HTMLTemplateGenerator;

export function option(...args: [unknown, unknown?]) {
  const { content, attributes } = attributesAndContentFromArgs<
    OptionAttributes
  >(...args);
  return html`<option ${
    attributeList<OptionAttributes>(attributes)
  }>${content}</option>`;
}
