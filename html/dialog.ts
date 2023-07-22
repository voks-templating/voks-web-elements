import { html, HTMLTemplate, HTMLTemplateGenerator } from "../deps.ts";
import { attributesAndContentFromArgs } from "../lib/util.ts";
import { attributeList } from "./element_helper.ts";
import { HTMLGlobalAttributes } from "./global_attributes.ts";

export type DialogAttributes = {
  open?: boolean;
} | Omit<HTMLGlobalAttributes, "tabindex">;

export function dialog(
  attributes: DialogAttributes,
  content?:
    | string
    | HTMLTemplate
    | (string | HTMLTemplate | HTMLTemplateGenerator)[],
): HTMLTemplateGenerator;

export function dialog(
  content:
    | string
    | HTMLTemplate
    | (string | HTMLTemplate | HTMLTemplateGenerator)[],
): HTMLTemplateGenerator;

export function dialog(...args: [unknown, unknown?]) {
  const { content, attributes } = attributesAndContentFromArgs<
    DialogAttributes
  >(...args);
  return html`<dialog ${
    attributeList<DialogAttributes>(attributes)
  }>${content}</dialog>`;
}
