import { html, HTMLTemplate, HTMLTemplateGenerator } from "../deps.ts";
import { attributeList } from "./element_helper.ts";
import { HTMLGlobalAttributes } from "./global_attributes.ts";

export type ObjectAttributes =
  & ({
    data: string;
  } | {
    type: string;
  })
  & (
    | {
      form?: string;
      height?: number;
      width?: number;
      name?: string;
      usemap?: string;
    }
    | HTMLGlobalAttributes
  );

export const object = (
  content:
    | string
    | HTMLTemplate
    | (string | HTMLTemplate | HTMLTemplateGenerator)[],
  attributes: ObjectAttributes,
) =>
  html`<object ${
    attributeList<ObjectAttributes>(attributes)
  }>${content}</object>`;
