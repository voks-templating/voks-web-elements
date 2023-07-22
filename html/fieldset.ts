import { html, HTMLTemplateGenerator } from "../deps.ts";
import { attributesAndContentFromArgs } from "../lib/util.ts";
import { attributeList } from "./element_helper.ts";
import { HTMLGlobalAttributes } from "./global_attributes.ts";
import { WebElementContent } from "./web_element_content.ts";

export type FieldsetAttributes = {
  disabled?: boolean;
  form?: string;
  name?: string;
} | HTMLGlobalAttributes;

export function fieldset(
  attributes: FieldsetAttributes,
  content?: WebElementContent,
): HTMLTemplateGenerator;

export function fieldset(
  content?: WebElementContent,
): HTMLTemplateGenerator;

export function fieldset(...args: [unknown, unknown?]) {
  const { content, attributes } = attributesAndContentFromArgs<
    FieldsetAttributes
  >(...args);
  return html`<fieldset ${
    attributeList<FieldsetAttributes>(attributes)
  }>${content}</fieldset>`;
}
