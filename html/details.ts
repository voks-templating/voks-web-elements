import { html, HTMLTemplateGenerator } from "../deps.ts";
import { attributesAndContentFromArgs } from "../lib/util.ts";
import { attributeList } from "./element_helper.ts";
import { HTMLGlobalAttributes } from "./global_attributes.ts";
import { WebElementContent } from "./web_element_content.ts";

export type DetailsAttributes = {
  open?: boolean;
} & HTMLGlobalAttributes;

export function details(
  attributes: DetailsAttributes,
  content?: WebElementContent,
): HTMLTemplateGenerator;

export function details(
  content?: WebElementContent,
): HTMLTemplateGenerator;

export function details(...args: [unknown, unknown?]) {
  const { content, attributes } = attributesAndContentFromArgs<
    DetailsAttributes
  >(...args);
  return html`<details${
    attributeList<DetailsAttributes>(attributes)
  }>${content}</details>`;
}
