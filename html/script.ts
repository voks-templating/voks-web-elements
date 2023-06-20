import { html, minify, HTMLTemplate } from "../deps.ts";
import { attributeList } from "./element_helper.ts";
import { HTMLGlobalAttributes } from "./global_attributes.ts";

export type ScriptAttributes = {
  async?: boolean;
  defer?: boolean;
  src?: string;
  type?: string;
  crossorigin?: string;
  integrity?: string;
  nomodule?: boolean;
  nonce?: string;
  referrerpolicy?: string;
} | HTMLGlobalAttributes;

export const script = (
  content: string | HTMLTemplate,
  attributes: ScriptAttributes = {},
) =>
  html`<script ${
    attributeList<ScriptAttributes>(attributes)
  }>${content}</script>`;
