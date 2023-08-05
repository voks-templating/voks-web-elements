import { html, HTMLTemplateGenerator } from "../deps.ts";
import { attributesAndContentFromArgs } from "../lib/util.ts";
import { attributeList } from "./element_helper.ts";
import { HTMLGlobalAttributes } from "./global_attributes.ts";
import { WebElementContent } from "./web_element_content.ts";

export type AnchorAttributes =
  & {
    download?: boolean | string;
    href?: string;
    hreflang?: string;
    ping?: string;
    refererPolicy?: string;
    rel?: string;
    target?: string;
    type?: string;
  }
  & HTMLGlobalAttributes;

export function a(
  attributes: AnchorAttributes,
  content?: WebElementContent,
): HTMLTemplateGenerator;

export function a(
  content?: WebElementContent,
): HTMLTemplateGenerator;

export function a(...args: [unknown, unknown?]) {
  const { content, attributes } = attributesAndContentFromArgs<
    AnchorAttributes
  >(...args);
  return html`<a${attributeList<AnchorAttributes>(attributes)}>${content}</a>`;
}
