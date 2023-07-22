import { HTMLTemplate, HTMLTemplateGenerator } from "../deps.ts";

export type WebElementContent =
  | string
  | HTMLTemplate
  | (string | HTMLTemplate | HTMLTemplateGenerator)[];
