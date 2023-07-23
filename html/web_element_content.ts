import { HTMLTemplate, HTMLTemplateGenerator } from "../deps.ts";

export type WebElementContent =
  | undefined
  | null
  | false
  | string
  | HTMLTemplate
  | (string | HTMLTemplate | HTMLTemplateGenerator)[];
