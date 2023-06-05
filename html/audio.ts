import { html, HTMLTemplate } from "../deps.ts";
import { attributeList } from "./element_helper.ts";
import { HTMLGlobalAttributes } from "./global_attributes.ts";

export type AudioAttributes =
  | {
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
  | HTMLGlobalAttributes;

export interface AudioElementOptions {
  classes?: string[];
  attributes?: AudioAttributes;
}

export const audio = (
  content: string | HTMLTemplate,
  { attributes, classes }: AudioElementOptions = {},
) =>
  html`<audio ${
    attributeList<AudioAttributes>(attributes, classes)
  }>${content}</audio>`;
