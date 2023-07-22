import { HTMLTemplate, HTMLTemplateGenerator } from "../deps.ts";

export type WebElementContent =
  | undefined
  | string
  | HTMLTemplate
  | (string | HTMLTemplate | HTMLTemplateGenerator)[];
