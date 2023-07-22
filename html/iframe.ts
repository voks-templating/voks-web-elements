import { html, HTMLTemplate, HTMLTemplateGenerator } from "../deps.ts";
import { attributesAndContentFromArgs } from "../lib/util.ts";
import { attributeList } from "./element_helper.ts";
import { HTMLGlobalAttributes } from "./global_attributes.ts";

export type IframeAttributes = {
  src?: string;
  srcdoc?: string;
  name?: string;
  sandbox?: string;
  allow?: string;
  allowfullscreen?: boolean;
  height?: number;
  width?: number;
  loading?: string;
  referrerpolicy?: string;
} | HTMLGlobalAttributes;

export function iframe(
  attributes: IframeAttributes,
  content?:
    | string
    | HTMLTemplate
    | (string | HTMLTemplate | HTMLTemplateGenerator)[],
): HTMLTemplateGenerator;

export function iframe(
  content?:
    | string
    | HTMLTemplate
    | (string | HTMLTemplate | HTMLTemplateGenerator)[],
): HTMLTemplateGenerator;

export function iframe(...args: [unknown, unknown?]) {
  const { content, attributes } = attributesAndContentFromArgs<
    IframeAttributes
  >(...args);
  return html`<iframe ${
    attributeList<IframeAttributes>(attributes)
  }>${content}</iframe>`;
}
