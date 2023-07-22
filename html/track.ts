import { html, HTMLTemplateGenerator } from "../deps.ts";
import { attributesAndContentFromArgs } from "../lib/util.ts";
import { attributeList } from "./element_helper.ts";
import { HTMLGlobalAttributes } from "./global_attributes.ts";
import { WebElementContent } from "./web_element_content.ts";

export type TrackAttributes = {
  default?: boolean;
  kind?: string;
  description?: string;
  chapters?: string;
  metadata?: string;
} | HTMLGlobalAttributes;

export function track(
  attributes: TrackAttributes,
  content?: WebElementContent,
): HTMLTemplateGenerator;

export function track(
  content?: WebElementContent,
): HTMLTemplateGenerator;

export function track(...args: [unknown, unknown?]) {
  const { content, attributes } = attributesAndContentFromArgs<
    TrackAttributes
  >(...args);
  return html`<track ${
    attributeList<TrackAttributes>(attributes)
  }>${content}</track>`;
}
