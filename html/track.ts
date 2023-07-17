import { html, HTMLTemplate, HTMLTemplateGenerator } from "../deps.ts";
import { attributesAndContentFromArgs } from "../lib/util.ts";
import { attributeList } from "./element_helper.ts";
import { HTMLGlobalAttributes } from "./global_attributes.ts";

export type TrackAttributes = {
  default?: boolean;
  kind?: string;
  description?: string;
  chapters?: string;
  metadata?: string;
} | HTMLGlobalAttributes;

export function track(
  attributes: TrackAttributes,
  content?: string | HTMLTemplate,
): HTMLTemplateGenerator;

export function track(
  content: string | HTMLTemplate,
): HTMLTemplateGenerator;

export function track(...args: [unknown, unknown?]) {
  const { content, attributes } = attributesAndContentFromArgs<
    TrackAttributes
  >(...args);
  return html`<track ${
    attributeList<TrackAttributes>(attributes)
  }>${content}</track>`;
}
