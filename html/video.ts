import { html, HTMLTemplateGenerator } from "../deps.ts";
import { attributesAndContentFromArgs } from "../lib/util.ts";
import { attributeList } from "./element_helper.ts";
import { HTMLGlobalAttributes } from "./global_attributes.ts";
import { WebElementContent } from "./web_element_content.ts";

export type VideoAttributes = {
  autoplay?: boolean;
  controls?: boolean;
  crossorigin?: string;
  height?: number;
  loop?: boolean;
  muted?: boolean;
  playsinline?: boolean;
  poster?: string;
  preload?: string;
  src?: string;
  width?: number;
} & HTMLGlobalAttributes;

export function video(
  attributes: VideoAttributes,
  content?: WebElementContent,
): HTMLTemplateGenerator;

export function video(
  content?: WebElementContent,
): HTMLTemplateGenerator;

export function video(...args: [unknown, unknown?]) {
  const { content, attributes } = attributesAndContentFromArgs<
    VideoAttributes
  >(...args);
  return html`<video${
    attributeList<VideoAttributes>(attributes)
  }>${content}</video>`;
}
