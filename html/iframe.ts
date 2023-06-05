import { html, HTMLTemplate } from "../deps.ts";
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

export interface IframeElementOptions {
  classes?: string[];
  attributes?: IframeAttributes;
}

export const iframe = (
  content: string | HTMLTemplate,
  { attributes, classes }: IframeElementOptions = {},
) =>
  html`<iframe ${
    attributeList<IframeAttributes>(attributes, classes)
  }>${content}</iframe>`;
