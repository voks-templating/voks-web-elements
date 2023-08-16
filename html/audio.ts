import { html, HTMLTemplate } from "../deps.ts";
import { attributesAndContentFromArgs } from "../lib/util.ts";
import { attributeList } from "./element_helper.ts";
import { HTMLGlobalAttributes } from "./global_attributes.ts";
import { WebElementContent } from "./web_element_content.ts";

export type AudioAttributes =
  & {
    autoplay?: boolean;
    controls?: boolean;
    controlslist?: string;
    anonymous?: boolean;
    useCredentials?: boolean;
    disableremoteplayback?: boolean;
    loop?: boolean;
    muted?: boolean;
    preload?: string;
  }
  & HTMLGlobalAttributes;

export function audio(
  attributes: AudioAttributes,
  content?: WebElementContent,
): HTMLTemplate;

export function audio(
  content?: WebElementContent,
): HTMLTemplate;

export function audio(...args: [unknown, unknown?]) {
  const { content, attributes } = attributesAndContentFromArgs<
    AudioAttributes
  >(...args);
  return html`<audio${
    attributeList<AudioAttributes>(attributes)
  }>${content}</audio>`;
}
